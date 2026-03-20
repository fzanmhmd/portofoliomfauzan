const form = document.getElementById("contactForm");
const histori = document.getElementById("messageHistory");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // biar ga reload

  const nama = document.getElementById("name").value;
  const pesan = document.getElementById("message").value;

  // bikin elemen baru
  const item = document.createElement("div");
  item.classList.add("item-pesan");

  item.innerHTML = `
    <strong>${nama}</strong>
    <p>${pesan}</p>
  `;

  histori.appendChild(item);

  // reset form
  form.reset();
});