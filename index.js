// Mobile menu toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (toggle && header && nav) {
    toggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        console.log('[menu]', isOpen ? 'opened' : 'closed');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('#primary-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Add or remove shadow when scrolling
window.addEventListener('scroll', () => {
    const headerEl = document.querySelector('.site-header');
    if (!headerEl) return;
    if (window.scrollY > 10) headerEl.classList.add('scrolled');
    else headerEl.classList.remove('scrolled');
});
// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
