const translations = {
  id: {
    'nav.home':       'Beranda',
    'nav.about':      'Tentang',
    'nav.projects':   'Projek',
    'nav.cert':       'Sertifikat',
    'nav.contact':    'Kontak',
    'hero.eyebrow':   'Frontend Developer & Digital Creator',
    'hero.greeting':  'Halo, saya',
    'hero.desc':      'Membangun website modern, responsif, dan user-friendly. Fokus pada UI/UX yang bersih dan pengalaman digital yang bermakna.',
    'hero.btn1':      '<i class="fas fa-folder-open"></i> Lihat Project',
    'hero.btn2':      '<i class="fas fa-arrow-down"></i> Unduh CV',
    'hero.stat':      'Projects',
    'about.title':    'Tentang',
    'about.h3':       'Halo! Perkenalkan saya Ojan',
    'about.p1':       'Saya lulusan S1 Teknik Informatika dari <a href="https://unindra.ac.id/" target="_blank">Universitas Indraprasta PGRI</a> yang berfokus pada pengembangan website modern, responsif, dan user-friendly. Memiliki pengalaman dalam UI/UX serta desain visual, termasuk pembuatan konten menggunakan Canva, dan aktif sebagai freelancer di Upwork.',
    'about.p2':       'Selain itu, saya juga memiliki minat di bidang content creation, seperti membuat konten dan live streaming game di TikTok, khususnya game kompetitif seperti Mobile Legends dan game story. Saya senang mengubah ide yang kompleks menjadi solusi digital yang sederhana dan menarik.',
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
    'proj2.title':    'Website Top-up Game',
    'proj2.desc':     'Website belanja dan top-up game online lengkap dengan payment gateway dan admin dashboard.',
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
    'hero.eyebrow':   'Frontend Developer & Digital Creator',
    'hero.greeting':  'Hi, I\'m',
    'hero.desc':      'Building modern, responsive, and user-friendly websites. Focused on clean UI/UX and meaningful digital experiences.',
    'hero.btn1':      '<i class="fas fa-folder-open"></i> View Projects',
    'hero.btn2':      '<i class="fas fa-arrow-down"></i> Download CV',
    'hero.stat':      'Projects',
    'about.title':    'About',
    'about.h3':       'Hi! I\'m Ojan',
    'about.p1':       'I\'m a Computer Science graduate from <a href="https://unindra.ac.id/" target="_blank">Universitas Indraprasta PGRI</a>, focused on building modern, responsive, and user-friendly websites. Experienced in UI/UX and visual design including Canva, and active as a freelancer on Upwork.',
    'about.p2':       'I also have a passion for content creation — making content and live-streaming games on TikTok, especially competitive games like Mobile Legends. I love turning complex ideas into simple, attractive digital solutions.',
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
    'proj2.title':    'Game Top-up Website',
    'proj2.desc':     'Online game shopping and top-up website with payment gateway and admin dashboard.',
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
}

document.getElementById('btnEN').addEventListener('click', () => applyLang('en'));
document.getElementById('btnID').addEventListener('click', () => applyLang('id'));

/* ────────────────────────────────────────────
   DARK MODE
──────────────────────────────────────────── */
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('i');
let isDark = false;

// respect system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark = true;
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.className = 'fas fa-sun';
}

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

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
   CERTIFICATE MARQUEE — pause on hover
──────────────────────────────────────────── */
(function() {
  const marquee = document.getElementById('certMarquee');
  const track   = document.getElementById('certTrack');
  if (!marquee || !track) return;

  marquee.addEventListener('mouseenter', () => track.classList.add('paused'));
  marquee.addEventListener('mouseleave', () => track.classList.remove('paused'));
  // touch support
  marquee.addEventListener('touchstart', () => track.classList.add('paused'), { passive: true });
  marquee.addEventListener('touchend',   () => track.classList.remove('paused'));
})();

/* ────────────────────────────────────────────
   CONTACT FORM
──────────────────────────────────────────── */
(function() {
  const form    = document.getElementById('contactForm');
  const msgList = document.getElementById('msgList');
  if (!form || !msgList) return;

  function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email= document.getElementById('cEmail').value.trim();
    const msg  = document.getElementById('cMsg').value.trim();
    if (!name || !email || !msg) return;

    const empty = msgList.querySelector('.msg-empty');
    if (empty) empty.remove();

    const now  = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' });
    const date = now.toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });

    const item = document.createElement('div');
    item.className = 'msg-item';
    item.innerHTML = `
      <div class="msg-meta">
        <span class="msg-name">${esc(name)}</span>
        <span class="msg-time">${date} ${time}</span>
      </div>
      <div class="msg-text">${esc(msg)}</div>`;
    msgList.prepend(item);
    form.reset();
  });
})();
