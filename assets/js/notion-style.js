// ===== Theme Toggle ===== //
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== Mobile Navigation Toggle ===== //
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== Smooth Scroll Behavior ===== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Fade-In Animations ===== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.strategy-card, .case-card, .metric-card, .competency-group, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Navbar Scroll Effect ===== //
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// ===== Active Navigation Link ===== //
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===== Scroll to Top Button ===== //
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--primary-blue);
    background-color: transparent;
    color: var(--primary-blue);
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = 'var(--primary-blue)';
    scrollToTopBtn.style.color = 'white';
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = 'transparent';
    scrollToTopBtn.style.color = 'var(--primary-blue)';
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ===== Add Active Style to Nav Links ===== //
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-blue);
    }

    .nav-link.active::after {
        width: 100%;
    }

    #scrollToTop:hover {
        box-shadow: 0 8px 20px rgba(0, 85, 255, 0.3);
    }

    @media (max-width: 640px) {
        .nav-menu.active {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: var(--bg-primary);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem;
            flex-direction: column;
            display: flex;
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

// ===== Form Handling ===== //
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Form will be submitted via FormSubmit service
        // Just add some visual feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // The form will naturally submit after 1 second
        setTimeout(() => {
            // This will be handled by FormSubmit service
        }, 1000);
    });
}

// ===== Page Load Animation ===== //
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity for fade-in on page load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';

// Fade in on load
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ===== Parallax Scroll Effect ===== //
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroOffset = heroSection.offsetTop;

        if (window.pageYOffset < heroOffset + heroSection.offsetHeight) {
            const offset = scrollPosition * 0.3;
            heroVisual.style.transform = `translateY(${offset}px)`;
        }
    });
}

// ===== Smooth Counter Animation for Metrics ===== //
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(progress * target) + '%';
        } else if (element.textContent.includes('x')) {
            element.textContent = (progress * target).toFixed(1) + 'x';
        } else if (element.textContent.includes('+')) {
            element.textContent = '+' + Math.floor(progress * target) + '%';
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

// Observe metric cards and animate them
const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValue = entry.target.querySelector('.metric-value');
            if (metricValue && !metricValue.dataset.animated) {
                metricValue.dataset.animated = 'true';

                const text = metricValue.textContent;
                let target = 0;

                if (text.includes('+185')) target = 185;
                else if (text.includes('47')) target = 47;
                else if (text.includes('3.2')) {
                    // Handle decimal
                    const element = metricValue;
                    const start = 0;
                    const duration = 2000;
                    const startTime = Date.now();

                    function updateDecimal() {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        element.textContent = (progress * 3.2).toFixed(1) + 'x';

                        if (progress < 1) {
                            requestAnimationFrame(updateDecimal);
                        }
                    }
                    updateDecimal();
                    return;
                } else if (text.includes('92')) target = 92;

                if (target > 0) {
                    animateCounter(metricValue, target);
                }
            }

            metricObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-card').forEach(card => {
    metricObserver.observe(card);
});

console.log('Notion-style portfolio loaded successfully!');
