/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript untuk kontak menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir untuk validasi

  // Validasi email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("border-red-500");
    emailInput.classList.remove("border-gray-300");
    alert("Email tidak valid. Silakan masukkan email yang benar.");
    return;
  } else {
    emailInput.classList.remove("border-red-500");
    emailInput.classList.add("border-gray-300");
  }

  // Kirim formulir jika validasi berhasil
  fetch(form.action, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Pastikan response dalam format JSON
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      // Jika berhasil, kosongkan formulir dan beri tahu pengguna
      form.reset();
      alert("Pesan Anda telah berhasil dikirim!");
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}