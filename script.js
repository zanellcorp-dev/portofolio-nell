/* === Navigasi Header === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* === Active Link pada Scroll === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset untuk header sticky
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* === Header Sticky === */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* === Hapus ikon menu/navbar saat klik link (untuk mobile) === */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    /* === Tombol Scroll Top (Footer) === */
    let footerIconTop = document.querySelector('.footer-iconTop');
    if (window.scrollY > 500) { // Muncul setelah scroll 500px
        footerIconTop.style.display = 'flex';
    } else {
        footerIconTop.style.display = 'none';
    }

    /* === Animasi Reveal on Scroll === */
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100; // Elemen muncul saat 100px dari bawah viewport

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
};

/* === Typing Effect dengan Typed.js === */
const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Freelancer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Mahasiswa Teknik'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});