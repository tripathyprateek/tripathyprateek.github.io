/**
 * Skills Tabs Module
 * Handles tab switching functionality for skills section
 */

/**
 * Initialize skills tabs functionality
 * Allows users to switch between different skill categories
 */
export function initSkillsTabs() {
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillsContents = document.querySelectorAll('.skills-content');

    // Check if skill tabs exist
    if (skillTabs.length === 0 || skillsContents.length === 0) {
        console.warn('Skills tabs or contents not found');
        return;
    }

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');

            // Update active tab
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            skillsContents.forEach(content => {
                if (content.getAttribute('data-category') === category) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}
