// ===== Cache elements =====
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
const navLinks = document.querySelectorAll('#primary-nav a');

// ===== Mobile menu toggle =====
if (header && toggle && nav) {
    // Open / close on button click
    toggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        console.log('[menu]', isOpen ? 'opened' : 'closed');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu with ESC key (accessibility)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && header.classList.contains('open')) {
            header.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            // Optional: return focus to the button for keyboard users
            toggle.focus();
        }
    });
}

// ===== Add or remove header shadow when scrolling =====
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== Footer year =====
const y = document.getElementById('year');
if (y) {
    y.textContent = new Date().getFullYear();
}
