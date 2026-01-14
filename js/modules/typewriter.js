/**
 * Typewriter Module
 * Creates animated typewriter effect for role titles
 */

/**
 * Initialize typewriter effect
 * Cycles through different roles with typing and deleting animation
 */
export function initTypewriter() {
    const typewriter = document.getElementById('typewriter');

    if (!typewriter) {
        console.warn('Typewriter element not found');
        return;
    }

    const roles = ['Product Manager', 'AI Strategist', 'Systems Thinker'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    /**
     * Recursive typing function
     * Handles both typing and deleting characters
     */
    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriter.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        // Pause at end of word before deleting
        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, 2000);
        }
        // Move to next role after deleting
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        // Typing speed varies based on whether we're typing or deleting
        const typeSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    type();
}
