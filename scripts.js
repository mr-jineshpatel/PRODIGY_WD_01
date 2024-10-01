// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const nav = document.querySelector('.navbar');
const footer = document.querySelector('footer');
const navLinks = document.querySelectorAll('.nav-links li a');
const serviceCards = document.querySelectorAll('.service-card');
const ctaButtons = document.querySelectorAll('.cta-btn');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    footer.classList.toggle('dark');
    navLinks.forEach(link => link.classList.toggle('dark'));
    serviceCards.forEach(card => card.classList.toggle('dark'));
    ctaButtons.forEach(btn => btn.classList.toggle('dark'));

    // Toggle icon
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌗';
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
});

// Update menu selection based on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = Array.from(navLinks);

function handleScroll() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('selected');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('selected');
        }
    });
}

window.addEventListener('scroll', handleScroll);
