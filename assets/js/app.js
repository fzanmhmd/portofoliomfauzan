/* ============================================
   app.js — Portfolio Muhammad Fauzan
   ============================================ */

/* ---------- NAVBAR scroll effect ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---------- HAMBURGER ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

/* ---------- HERO CANVAS — floating geometric particles ---------- */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const SHAPES = ['circle', 'triangle', 'ring', 'diamond'];
  const COUNT  = 38;

  const particles = Array.from({ length: COUNT }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     4 + Math.random() * 14,
    vx:    (Math.random() - 0.5) * 0.45,
    vy:    (Math.random() - 0.5) * 0.45,
    alpha: 0.06 + Math.random() * 0.2,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    rot:   Math.random() * Math.PI * 2,
    rotV:  (Math.random() - 0.5) * 0.012,
  }));

  function drawShape(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    ctx.strokeStyle = 'rgba(255,255,255,1)';
    ctx.fillStyle   = 'rgba(255,255,255,1)';
    ctx.lineWidth   = 1.2;

    switch (p.shape) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'ring':
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.stroke();
        break;

      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.lineTo(p.r * 0.87, p.r * 0.5);
        ctx.lineTo(-p.r * 0.87, p.r * 0.5);
        ctx.closePath();
        ctx.stroke();
        break;

      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.lineTo(p.r * 0.6, 0);
        ctx.lineTo(0, p.r);
        ctx.lineTo(-p.r * 0.6, 0);
        ctx.closePath();
        ctx.stroke();
        break;
    }
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x  += p.vx;
      p.y  += p.vy;
      p.rot += p.rotV;
      if (p.x < -30) p.x = canvas.width + 30;
      if (p.x > canvas.width + 30) p.x = -30;
      if (p.y < -30) p.y = canvas.height + 30;
      if (p.y > canvas.height + 30) p.y = -30;
      drawShape(p);
    }
    requestAnimationFrame(tick);
  }
  tick();
})();

/* ---------- SCROLL REVEAL ---------- */
(function () {
  const targets = document.querySelectorAll(
    '.anim-left, .anim-right, .anim-up, .anim-title'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();

/* ---------- PROJECT HORIZONTAL SCROLL ---------- */
(function () {
  const track      = document.getElementById('projectsTrack');
  const btnLeft    = document.getElementById('scrollLeft');
  const btnRight   = document.getElementById('scrollRight');
  const dotsWrap   = document.getElementById('scrollDots');
  if (!track) return;

  const cards  = track.querySelectorAll('.project-card');
  const total  = cards.length;
  const STEP   = 340;

  /* Build dots */
  const dots = Array.from({ length: total }, (_, i) => {
    const d = document.createElement('button');
    d.className = 'scroll-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Go to project ${i + 1}`);
    d.addEventListener('click', () => {
      track.scrollTo({ left: i * STEP, behavior: 'smooth' });
    });
    dotsWrap.appendChild(d);
    return d;
  });

  function updateUI() {
    const s = track.scrollLeft;
    btnLeft.disabled  = s <= 0;
    btnRight.disabled = s >= track.scrollWidth - track.clientWidth - 5;
    const idx = Math.round(s / STEP);
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  btnLeft.addEventListener('click',  () => track.scrollBy({ left: -STEP, behavior: 'smooth' }));
  btnRight.addEventListener('click', () => track.scrollBy({ left:  STEP, behavior: 'smooth' }));
  track.addEventListener('scroll', updateUI);
  updateUI();

  /* Drag to scroll */
  let isDown = false, startX, scrollStart;
  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('grabbing');
    startX = e.pageX - track.offsetLeft;
    scrollStart = track.scrollLeft;
  });
  document.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('grabbing');
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollStart - (x - startX);
  });
})();

/* ---------- CONTACT FORM ---------- */
(function () {
  const form    = document.getElementById('contactForm');
  const history = document.getElementById('messageHistory');
  if (!form || !history) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) return;

    /* Clear empty state */
    const empty = history.querySelector('.empty-state');
    if (empty) empty.remove();

    const now  = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    const item = document.createElement('div');
    item.className = 'message-item';
    item.innerHTML = `
      <div class="message-meta">
        <span class="message-name">${escapeHtml(name)}</span>
        <span class="message-time">${date} ${time}</span>
      </div>
      <div class="message-content">${escapeHtml(message)}</div>
    `;
    history.prepend(item);
    form.reset();
  });

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
})();

/* ---------- LANGUAGE TOGGLE (stub) ---------- */
document.getElementById('eng')?.addEventListener('click', () => {
  console.log('Switch to English — implement i18n here');
});
document.getElementById('idn')?.addEventListener('click', () => {
  console.log('Switch to Indonesian — implement i18n here');
});
