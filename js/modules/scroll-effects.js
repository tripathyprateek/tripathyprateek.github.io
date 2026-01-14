/**
 * Scroll Effects Module
 * Handles scroll-triggered animations using Intersection Observer API
 */

/**
 * Initialize scroll effects
 * Observes cards and sections, triggering fade-in animations on scroll
 */
export function initScrollEffects() {
    // Observer configuration
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Select all elements to observe
    const elementsToObserve = document.querySelectorAll('.card, .case-study-card, .experience-content, .award-card');

    // Apply initial styles and observe each element
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(el);
    });
}
