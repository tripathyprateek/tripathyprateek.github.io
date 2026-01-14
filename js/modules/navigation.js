/**
 * Navigation Module
 * Handles mobile menu toggle, navbar scroll effects, and smooth scrolling
 */

/**
 * Initialize navigation functionality
 * - Mobile menu toggle
 * - Navbar scroll effect (adds 'scrolled' class on scroll)
 * - Smooth scroll with offset for anchor links
 */
export function initNavigation() {
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Check if mobile menu elements exist
    if (!mobileMenuBtn || !mobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Toggle mobile menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

/**
 * Initialize navbar scroll effect
 * Adds 'scrolled' class to navbar when user scrolls past 50px
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (!navbar) {
        console.warn('Navbar element not found');
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Initialize smooth scroll functionality for anchor links
 * Scrolls to target with 80px offset to account for fixed navbar
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
