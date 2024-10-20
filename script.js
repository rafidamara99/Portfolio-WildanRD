/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hamburger menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const faSolid = document.querySelector('.fa-solid');

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
});

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.add('hidden')
        faSolid.classList.toggle('fa-xmark');
    });
});

// Menutup menu jika mengklik di luar menu
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.add('hidden'); // Menyembunyikan menu
        faSolid.classList.remove('fa-xmark'); // Kembali ke ikon hamburger
    }
});