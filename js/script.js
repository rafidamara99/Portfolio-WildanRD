/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Navbar Blur on scroll ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hamburger menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const toggleHamburger = document.getElementById("toggle-hamburger");

// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
  const isMenuVisible = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  toggleHamburger.classList.toggle("fa-xmark");
}

// Event listener untuk hamburger
hamburger.addEventListener("click", toggleMenu);

// Menutup menu jika mengklik di luar menu
document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
    mobileMenu.classList.add("hidden");
    toggleHamburger.classList.remove("fa-xmark");
  }
});

// Event listener untuk menu links
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    toggleHamburger.classList.remove("fa-xmark");
  });
});

