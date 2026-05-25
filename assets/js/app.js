const translations = {
  id: {
    'nav.home':       'Beranda',
    'nav.about':      'Tentang',
    'nav.projects':   'Projek',
    'nav.cert':       'Sertifikat',
    'nav.contact':    'Kontak',
    'hero.eyebrow':   'Fullstack WEB Developer | WEB-Based Systems &amp; Machine Learning Integration',
    'hero.greeting':  'Halo, saya',
    'hero.desc':      'Membangun website modern, responsif, dan sistem berbasis web yang terintegrasi dengan data serta Machine Learning untuk menciptakan solusi digital yang lebih cerdas dan bermanfaat.',
    'hero.btn1':      '<i class="fas fa-folder-open"></i> Lihat Project',
    'hero.btn2':      '<i class="fas fa-arrow-down"></i> Unduh CV',
    'hero.stat':      'Projects',
    'like.label':     'Suka website ini',
    'like.liked':     'Terima kasih',
    'like.count':     'total suka',
    'about.title':    'Tentang',
    'about.h3':       'Halo! Perkenalkan saya Ojan',
    'about.p1':       'Saya adalah lulusan S1 Teknik Informatika yang berfokus sebagai Fullstack Web Developer dengan minat pada pengembangan sistem berbasis web, dashboard admin, database, dan integrasi Machine Learning. Saya terbiasa membangun aplikasi web modern, responsif, dan user-friendly, serta tertarik mengembangkan solusi digital yang mampu mengolah data untuk membantu proses pengambilan keputusan.',
    'about.p2':       'Dengan menggabungkan kemampuan frontend, backend, UI/UX, database, dan Machine Learning, saya berkomitmen untuk menciptakan sistem digital yang tidak hanya menarik secara visual, tetapi juga fungsional, cerdas, dan bermanfaat bagi pengguna.',
    'about.stat1':    'Teknik Informatika',
    'about.stat2':    'Tahun Pengalaman',
    'about.stat3':    'Projects',
    'about.stat4':    'Upwork Freelancer',
    'projects.title': 'Projects',
    'proj.soon':      'Segera',
    'proj.wip':       'Dalam Pengerjaan',
    'proj.tba':       'Belum Tersedia',
    'proj.tba.desc':  'Segera hadir — project baru sedang dalam pengerjaan.',
    'proj1.title':    'Klasifikasi Prioritas Pasien',
    'proj1.desc':     'Projek TA/Skripsi — Klasifikasi prioritas pasien transfusi darah PRC menggunakan Naive Bayes pada RS Kanker Dharmais.',
    'proj2.title':    'Putisserie',
    'proj2.desc':     'Website boutique cake shop dengan katalog produk, dukungan bahasa, dan alur pemesanan online via WhatsApp.',
    'proj3.desc':     'Aplikasi DonDar berbasis web dengan fitur validasi login, role petugas, dan tampilan user-friendly.',
    'proj4.desc':     'Aplikasi absensi berbasis web yang memudahkan karyawan dan perusahaan menyimpan dan mengolah data kehadiran.',
    'cert.title':     'Sertifikat',
    'contact.title':  'Kontak',
    'contact.h3':     'Mari berkolaborasi',
    'contact.p':      'Siap untuk project baru atau sekadar ngobrol tentang ide digital? Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah.',
    'form.name':      'Nama',
    'form.email':     'Email',
    'form.message':   'Pesan',
    'form.send':      'Kirim Pesan',
    'form.inbox':     'Pesan Masuk',
    'form.empty':     'Belum ada pesan.',
    'footer.made':    'Dibuat dengan',
    'footer.stack':   'HTML · CSS · JavaScript',
  },
  en: {
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.projects':   'Projects',
    'nav.cert':       'Certificates',
    'nav.contact':    'Contact',
    'hero.eyebrow':   'Fullstack WEB Developer | WEB-Based Systems &amp; Machine Learning Integration',
    'hero.greeting':  'Hi, I\'m',
    'hero.desc':      'I build modern, responsive websites and web-based systems integrated with data and Machine Learning to deliver smarter and more impactful digital solutions.',
    'hero.btn1':      '<i class="fas fa-folder-open"></i> View Projects',
    'hero.btn2':      '<i class="fas fa-arrow-down"></i> Download CV',
    'hero.stat':      'Projects',
    'like.label':     'Like this website',
    'like.liked':     'Thanks for liking',
    'like.count':     'total likes',
    'about.title':    'About',
    'about.h3':       'Hi! I\'m Ojan',
    'about.p1':       'I am a Bachelor of Informatics Engineering graduate with a focus as a Fullstack Web Developer, interested in developing web-based systems, admin dashboards, databases, and Machine Learning integration. I am experienced in building modern, responsive, and user-friendly web applications, and I am passionate about creating digital solutions that can process data to support better decision-making.',
    'about.p2':       'By combining frontend, backend, UI/UX, database, and Machine Learning skills, I am committed to creating digital systems that are not only visually appealing, but also functional, intelligent, and beneficial for users.',
    'about.stat1':    'Computer Science',
    'about.stat2':    'Years of Experience',
    'about.stat3':    'Projects',
    'about.stat4':    'Upwork Freelancer',
    'projects.title': 'Projects',
    'proj.soon':      'Coming soon',
    'proj.wip':       'In Progress',
    'proj.tba':       'Not Available Yet',
    'proj.tba.desc':  'Coming soon — new project in progress.',
    'proj1.title':    'Patient Priority Classification',
    'proj1.desc':     'Thesis project — PRC blood transfusion patient priority classification using Naive Bayes at RS Kanker Dharmais.',
    'proj2.title':    'Putisserie',
    'proj2.desc':     'Boutique cake shop website with a product catalog, language support, and online ordering via WhatsApp.',
    'proj3.desc':     'DonDar web app with login validation, officer roles, and a user-friendly interface.',
    'proj4.desc':     'Web-based attendance app that helps employees and companies store and manage attendance data easily.',
    'cert.title':     'Certificates',
    'contact.title':  'Contact',
    'contact.h3':     'Let\'s collaborate',
    'contact.p':      'Ready for a new project or just want to chat about a digital idea? Feel free to reach out through any platform below.',
    'form.name':      'Name',
    'form.email':     'Email',
    'form.message':   'Message',
    'form.send':      'Send Message',
    'form.inbox':     'Inbox',
    'form.empty':     'No messages yet.',
    'footer.made':    'Made with',
    'footer.stack':   'HTML · CSS · JavaScript',
  }
};

let currentLang = 'id';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnID').classList.toggle('active', lang === 'id');
  window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { lang } }));
}

document.getElementById('btnEN').addEventListener('click', () => applyLang('en'));
document.getElementById('btnID').addEventListener('click', () => applyLang('id'));

const realtime = (() => {
  const handlers = {};
  const subscribedEvents = new Set();
  let source = null;

  function ensureSource() {
    if (source || !('EventSource' in window)) return;
    source = new EventSource('/api/events');
  }

  function emit(event, payload) {
    (handlers[event] || []).forEach(handler => handler(payload));
  }

  function on(event, handler) {
    if (!handlers[event]) handlers[event] = [];
    handlers[event].push(handler);
    ensureSource();

    if (source && !subscribedEvents.has(event)) {
      subscribedEvents.add(event);
      source.addEventListener(event, e => {
        try {
          emit(event, JSON.parse(e.data));
        } catch {
          emit(event, null);
        }
      });
    }
  }

  return { on };
})();

/* ────────────────────────────────────────────
   DARK MODE
──────────────────────────────────────────── */
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('i');
let isDark = false;

document.documentElement.setAttribute('data-theme', 'light');
themeIcon.className = 'fas fa-moon';

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

/* LIKE COUNTER */
(function() {
  const button = document.getElementById('likeButton');
  const countEl = document.getElementById('likeCount');
  const labelEl = document.getElementById('likeLabel');
  if (!button || !countEl || !labelEl) return;

  const LIKED_KEY = 'portfolioWebsiteLiked';
  const formatter = new Intl.NumberFormat('id-ID');

  function hasLiked() {
    return localStorage.getItem(LIKED_KEY) === 'true';
  }

  function setCount(count) {
    const value = Number(count) || 0;
    countEl.textContent = formatter.format(value);
  }

  function syncLikedState() {
    const liked = hasLiked();
    button.classList.toggle('liked', liked);
    button.disabled = liked;
    labelEl.textContent = translations[currentLang][liked ? 'like.liked' : 'like.label'];
  }

  async function loadLikes() {
    try {
      const response = await fetch('/api/likes', { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to load likes');
      const likes = await response.json();
      setCount(likes.count);
    } catch {
      setCount(Number(localStorage.getItem('portfolioLikeCount')) || 0);
    }
  }

  button.addEventListener('click', async () => {
    if (hasLiked()) return;
    button.disabled = true;

    try {
      const response = await fetch('/api/likes', { method: 'POST' });
      if (!response.ok) throw new Error('Failed to save like');
      const likes = await response.json();
      localStorage.setItem(LIKED_KEY, 'true');
      localStorage.setItem('portfolioLikeCount', String(likes.count || 0));
      setCount(likes.count);
    } catch {
      const fallbackCount = (Number(localStorage.getItem('portfolioLikeCount')) || 0) + 1;
      localStorage.setItem(LIKED_KEY, 'true');
      localStorage.setItem('portfolioLikeCount', String(fallbackCount));
      setCount(fallbackCount);
    }

    syncLikedState();
  });

  realtime.on('state', payload => {
    if (payload?.likes) setCount(payload.likes.count);
  });

  realtime.on('likes-updated', likes => {
    if (likes) {
      localStorage.setItem('portfolioLikeCount', String(likes.count || 0));
      setCount(likes.count);
    }
  });

  window.addEventListener('portfolio:languagechange', syncLikedState);
  syncLikedState();
  loadLikes();
})();

/* ────────────────────────────────────────────
   HAMBURGER
──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ────────────────────────────────────────────
   SCROLL REVEAL
──────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ────────────────────────────────────────────
   PROJECTS SCROLL
──────────────────────────────────────────── */
(function() {
  const track  = document.getElementById('pTrack');
  const btnL   = document.getElementById('pLeft');
  const btnR   = document.getElementById('pRight');
  if (!track) return;
  const STEP = 340;

  function updateBtns() {
    btnL.disabled = track.scrollLeft <= 4;
    btnR.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  }

  btnL.addEventListener('click', () => track.scrollBy({ left: -STEP, behavior: 'smooth' }));
  btnR.addEventListener('click', () => track.scrollBy({ left:  STEP, behavior: 'smooth' }));
  track.addEventListener('scroll', updateBtns);
  updateBtns();

  // drag to scroll
  let isDragging = false, sx, sl;
  track.addEventListener('mousedown', e => {
    isDragging = true; sx = e.pageX - track.offsetLeft; sl = track.scrollLeft;
    track.classList.add('grabbing');
  });
  window.addEventListener('mouseup', () => { isDragging = false; track.classList.remove('grabbing'); });
  track.addEventListener('mousemove', e => {
    if (!isDragging) return; e.preventDefault();
    track.scrollLeft = sl - (e.pageX - track.offsetLeft - sx);
  });
  track.addEventListener('mouseleave', () => { isDragging = false; track.classList.remove('grabbing'); });
})();

/* ────────────────────────────────────────────
   CERTIFICATE
──────────────────────────────────────────── */
(function() {
  const track = document.getElementById('certTrack');
  const firstGroup = track?.querySelector('.cert-group');
  if (!track || !firstGroup) return;

  track.querySelectorAll('.cert-group:not(:first-child)').forEach(group => group.remove());

  while (track.querySelectorAll('.cert-group').length < 3) {
    const clone = firstGroup.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('img').forEach(img => { img.alt = ''; });
    track.appendChild(clone);
  }

  function syncMarqueeDistance() {
    const width = firstGroup.getBoundingClientRect().width;
    if (width > 0) {
      track.style.setProperty('--cert-scroll-to', `-${width}px`);
      track.classList.add('marquee-ready');
    }
  }

  function syncAfterLayout() {
    requestAnimationFrame(syncMarqueeDistance);
  }

  const images = [...track.querySelectorAll('img')];
  images.forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', syncAfterLayout, { once: true });
      img.addEventListener('error', syncAfterLayout, { once: true });
    }
  });

  syncAfterLayout();
  window.addEventListener('resize', syncMarqueeDistance);
  if (document.fonts) document.fonts.ready.then(syncAfterLayout);
})();

const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalClose = document.getElementById('certModalClose');

document.querySelectorAll('.cert-card[data-img]').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.dataset.img;
    if (!imgSrc || imgSrc === '#') return;
    certModalImg.src = imgSrc;
    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

certModalClose.addEventListener('click', closeModal);
certModal.addEventListener('click', (e) => {
  if (e.target === certModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  certModal.classList.remove('active');
  document.body.style.overflow = '';
}




/* ────────────────────────────────────────────
   CONTACT FORM
──────────────────────────────────────────── */
(function() {
  const form    = document.getElementById('contactForm');
  const msgList = document.getElementById('msgList');
  if (!form || !msgList) return;

  const STORAGE_KEY = 'portfolioMessages';
  const CLEAR_CACHE_KEY = 'portfolioMessagesCleared-2026-05-14';
  const API_URL = '/api/messages';
  let currentMessages = [];

  if (!localStorage.getItem(CLEAR_CACHE_KEY)) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(CLEAR_CACHE_KEY, 'true');
  }

  function esc(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function getLocalMessages() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveLocalMessages(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(0, 50)));
  }

  function normalizeMessages(messages) {
    return (Array.isArray(messages) ? messages : [])
      .filter(message => message && message.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function setMessages(messages) {
    currentMessages = normalizeMessages(messages);
    saveLocalMessages(currentMessages);
    renderMessages(currentMessages);
  }

  function mergeMessage(message) {
    if (!message?.id) return;
    const withoutDuplicate = currentMessages.filter(item => item.id !== message.id);
    setMessages([message, ...withoutDuplicate]);
  }

  function formatMessageTime(createdAt) {
    const dateValue = new Date(createdAt);
    const date = Number.isNaN(dateValue.getTime()) ? new Date() : dateValue;
    const timeText = date.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' });
    const dateText = date.toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
    return `${dateText} ${timeText}`;
  }

  function renderMessages(messages) {
    msgList.innerHTML = '';

    if (!messages.length) {
      const empty = document.createElement('div');
      empty.className = 'msg-empty';
      empty.setAttribute('data-i18n', 'form.empty');
      empty.textContent = translations[currentLang]['form.empty'];
      msgList.appendChild(empty);
      return;
    }

    messages.forEach(message => {
      const item = document.createElement('div');
      item.className = 'msg-item';
      item.innerHTML = `
        <div class="msg-meta">
          <span class="msg-name">${esc(message.name)}</span>
          <span class="msg-time">${formatMessageTime(message.createdAt)}</span>
        </div>
        <div class="msg-text">${esc(message.message)}</div>`;
      msgList.appendChild(item);
    });
  }

  async function loadMessages() {
    try {
      const response = await fetch(API_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to load messages');
      const messages = await response.json();
      setMessages(messages);
    } catch {
      setMessages(getLocalMessages());
    }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email= document.getElementById('cEmail').value.trim();
    const msg  = document.getElementById('cMsg').value.trim();
    if (!name || !email || !msg) return;

    const message = { name, email, message: msg };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      if (!response.ok) throw new Error('Failed to save message');

      const savedMessage = await response.json();
      mergeMessage(savedMessage);
    } catch {
      const localMessage = {
        ...message,
        id: `local-${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      mergeMessage(localMessage);
    }

    form.reset();
  });

  realtime.on('state', payload => {
    if (payload?.messages) setMessages(payload.messages);
  });

  realtime.on('message-created', message => {
    if (message) mergeMessage(message);
  });

  window.addEventListener('portfolio:languagechange', () => renderMessages(currentMessages));
  loadMessages();
})();
