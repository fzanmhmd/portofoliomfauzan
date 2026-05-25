const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = __dirname;
const dataDir = process.env.DATA_DIR || rootDir;
const messagesFile = path.join(dataDir, 'messages.json');
const likesFile = path.join(dataDir, 'likes.json');
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

const clients = new Set();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function readJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function sendJson(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(value));
}

function sendEvent(res, event, payload) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function broadcast(event, payload) {
  clients.forEach(client => sendEvent(client, event, payload));
}

function readMessages() {
  const messages = readJson(messagesFile, []);
  return Array.isArray(messages) ? messages : [];
}

function saveMessages(messages) {
  writeJson(messagesFile, messages);
}

function publicMessage(message) {
  return {
    id: message.id,
    name: message.name,
    message: message.message,
    createdAt: message.createdAt
  };
}

function getPublicMessages() {
  return readMessages()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(publicMessage);
}

function readLikes() {
  const likes = readJson(likesFile, { count: 0 });
  const count = Number(likes.count);
  return { count: Number.isFinite(count) && count > 0 ? Math.floor(count) : 0 };
}

function saveLikes(likes) {
  writeJson(likesFile, likes);
}

function cleanText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
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

async function handleMessagesApi(req, res) {
  if (req.method === 'GET') {
    sendJson(res, 200, getPublicMessages());
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
      saveMessages(messages);

      const visibleMessage = publicMessage(message);
      broadcast('message-created', visibleMessage);
      sendJson(res, 201, visibleMessage);
    } catch {
      sendJson(res, 400, { error: 'Invalid message payload.' });
    }
    return;
  }

  res.writeHead(405, { Allow: 'GET, POST' });
  res.end();
}

async function handleLikesApi(req, res) {
  if (req.method === 'GET') {
    sendJson(res, 200, readLikes());
    return;
  }

  if (req.method === 'POST') {
    const likes = readLikes();
    likes.count += 1;
    saveLikes(likes);
    broadcast('likes-updated', likes);
    sendJson(res, 201, likes);
    return;
  }

  res.writeHead(405, { Allow: 'GET, POST' });
  res.end();
}

function handleEvents(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive'
  });

  sendEvent(res, 'state', {
    messages: getPublicMessages(),
    likes: readLikes()
  });

  clients.add(res);

  const keepAlive = setInterval(() => {
    res.write(': keep-alive\n\n');
  }, 25000);

  req.on('close', () => {
    clearInterval(keepAlive);
    clients.delete(res);
  });
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
  const pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;

  if (pathname === '/api/messages') {
    handleMessagesApi(req, res);
    return;
  }

  if (pathname === '/api/likes') {
    handleLikesApi(req, res);
    return;
  }

  if (pathname === '/api/events') {
    handleEvents(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(port, host, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
