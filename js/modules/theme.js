/**
 * Theme Module
 * Handles dark mode toggle functionality with localStorage persistence
 */

/**
 * Initialize theme functionality
 * - Loads saved theme preference from localStorage
 * - Sets up theme toggle button click handler
 * - Updates theme icon based on current theme
 */
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    const body = document.body;

    // Check if all required elements exist
    if (!themeToggle || !themeIcon) {
        console.warn('Theme elements not found');
        return;
    }

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('darkMode') === 'true';
    if (currentTheme) {
        html.classList.add('dark');
        body.classList.add('dark');
        themeIcon.textContent = '🌙';
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        body.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        themeIcon.textContent = isDark ? '🌙' : '☀️';
    });
}
