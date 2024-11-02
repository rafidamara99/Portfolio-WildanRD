    // Mendapatkan elemen yang diperlukan
    const toggle = document.getElementById('dark-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;

    // Memeriksa apakah dark mode sudah diaktifkan sebelumnya
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark');
        toggleIcon.classList.remove('bx-sun');
        toggleIcon.classList.add('bx-moon');
    }

    // Fungsi untuk mengubah mode
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');

        // Mengubah ikon
        if (body.classList.contains('dark')) {
            toggleIcon.classList.remove('bx-sun');
            toggleIcon.classList.add('bx-moon');
            localStorage.setItem('dark-mode', 'enabled'); // Simpan preferensi mode gelap
        } else {
            toggleIcon.classList.remove('bx-moon');
            toggleIcon.classList.add('bx-sun');
            localStorage.setItem('dark-mode', 'disabled'); // Simpan preferensi mode terang
        }
    });
