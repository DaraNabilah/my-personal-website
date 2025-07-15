const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

if (hamburgerMenu && menu) {
    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Tambahkan jika ingin animasi ikon hamburger
    });
}

// Opsi tambahan: Smooth scrolling (jika Anda ingin keduanya)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Tutup menu mobile setelah tautan diklik (opsional)
            if (window.innerWidth < 992 && menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburgerMenu.classList.remove('active'); // Jika Anda menambahkan kelas 'active' ke hamburger
            }
        }
    });
});