const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = __dirname;
const dataFile = path.join(rootDir, 'messages.json');
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf'
};

function sendJson(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(value));
}

function readMessages() {
  try {
    const raw = fs.readFileSync(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

function writeMessages(messages) {
  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
      if (body.length > 64 * 1024) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });

    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function cleanText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

async function handleMessagesApi(req, res) {
  if (req.method === 'GET') {
    const messages = readMessages().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    sendJson(res, 200, messages);
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = await readRequestBody(req);
      const payload = JSON.parse(body || '{}');
      const message = {
        id: crypto.randomUUID(),
        name: cleanText(payload.name, 80),
        email: cleanText(payload.email, 120),
        message: cleanText(payload.message, 1200),
        createdAt: new Date().toISOString()
      };

      if (!message.name || !message.email || !message.message) {
        sendJson(res, 400, { error: 'Name, email, and message are required.' });
        return;
      }

      const messages = readMessages();
      messages.unshift(message);
      writeMessages(messages);
      sendJson(res, 201, message);
    } catch {
      sendJson(res, 400, { error: 'Invalid message payload.' });
    }
    return;
  }

  res.writeHead(405, { Allow: 'GET, POST' });
  res.end();
}

function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const urlPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const decodedPath = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const filePath = path.resolve(rootDir, decodedPath);

  if (filePath !== rootDir && !filePath.startsWith(rootDir + path.sep)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const type = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/messages')) {
    handleMessagesApi(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(port, host, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
