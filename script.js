/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hamburger menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const toggleHamburger = document.getElementById("toggle-hamburger");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeMobile = document.getElementById("dark-mode-mobile");

// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
  const isMenuVisible = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  toggleHamburger.classList.toggle("fa-xmark");
  
  // Menyembunyikan toggle dark mode jika menu aktif
  if (isMenuVisible) {
    darkModeToggle.classList.remove("hidden");
    darkModeMobile.classList.remove("hidden");
  } else {
    darkModeToggle.classList.add("hidden");
    darkModeMobile.classList.add("hidden");
  }
}

// Event listener untuk hamburger
hamburger.addEventListener("click", toggleMenu);

// Menutup menu jika mengklik di luar menu
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.add("hidden");
    toggleHamburger.classList.remove("fa-xmark");
    darkModeToggle.classList.remove("hidden");
    darkModeMobile.classList.remove("hidden");
  }
});

// Event listener untuk menu links
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    toggleHamburger.classList.remove("fa-xmark");
    darkModeToggle.classList.remove("hidden");
    darkModeMobile.classList.remove("hidden");
  });
});

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript untuk dark mode ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Mengambil elemen tombol, body, dan ikon
const body = document.body;
const toggleIcon = document.getElementById("toggle-icon");
const toggleIconMobile = document.getElementById("toggle-icon-mobile");

// Memeriksa apakah mode gelap sudah diaktifkan sebelumnya
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleIcon.classList.remove("fa-sun");
  toggleIcon.classList.add("fa-moon");
  toggleIconMobile.classList.remove("fa-sun");
  toggleIconMobile.classList.add("fa-moon");
}

// Menambahkan event listener untuk tombol dark mode
function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  
  // Mengubah ikon berdasarkan status mode
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
    toggleIconMobile.classList.remove("fa-sun");
    toggleIconMobile.classList.add("fa-moon");
  } else {
    localStorage.removeItem("dark-mode");
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
    toggleIconMobile.classList.remove("fa-moon");
    toggleIconMobile.classList.add("fa-sun");
  }
}

// Event listener untuk dark mode
darkModeToggle.addEventListener("click", toggleDarkMode);
darkModeMobile.addEventListener("click", toggleDarkMode);
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript untuk kontak menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir untuk validasi

  // Validasi email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("border-red-500");
    emailInput.classList.remove("border-gray-300");
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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript untuk back to top ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Select the back to top button
const backToTopButton = document.getElementById("back-to-top");

// Get the height of the home section
const homeSection = document.getElementById("home");

// Initially hide the button
backToTopButton.style.display = "none";

// Show the button when the user scrolls past the home section
window.onscroll = function () {
  if (window.scrollY > homeSection.offsetHeight) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Smooth scroll to the top when the button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scroll smooth
  });
};
