document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // AOS Initialization
    AOS.init({
        duration: 800,
        once: true,
        mirror: false
    });

    // Scroll-to-top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Load particles.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});