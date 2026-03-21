const form = document.getElementById("contactForm");
const histori = document.getElementById("messageHistory");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("name").value;
  const pesan = document.getElementById("message").value;

  // hapus tampilan kosong
  const empty = histori.querySelector(".empty-state");
  if (empty) {
    empty.remove();
  }

  // waktu sekarang
  const now = new Date();
  const time = now.toLocaleString("id-ID", {
    day:"numeric",
    month:"short",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit"
  });

  // buat elemen pesan
  const item = document.createElement("div");
  item.classList.add("message-item");

  item.innerHTML = `
    <div class="message-meta">
      <span class="message-name">${nama}</span>
      <span class="message-time">${time}</span>
    </div>
    <div class="message-content">"${pesan}"</div>
  `;

  histori.appendChild(item);

  form.reset();
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
