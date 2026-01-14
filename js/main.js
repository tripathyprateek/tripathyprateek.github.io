/**
 * Main Entry Point
 * Imports and initializes all modules for the portfolio site
 */

import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initTypewriter } from './modules/typewriter.js';
import { initCarousel } from './modules/carousel.js';
import { initSkillsTabs } from './modules/skills-tabs.js';
import { initFormHandler } from './modules/form-handler.js';
import { initScrollEffects } from './modules/scroll-effects.js';

/**
 * Initialize all modules when DOM is ready
 */
function init() {
    // Initialize theme (should run first to apply saved theme)
    initTheme();

    // Initialize navigation
    initNavigation();

    // Initialize typewriter effect
    initTypewriter();

    // Initialize awards carousel
    initCarousel();

    // Initialize skills tabs
    initSkillsTabs();

    // Initialize contact form handler
    initFormHandler();

    // Initialize scroll effects (should run last)
    initScrollEffects();
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
