/**
 * Carousel Module
 * Handles awards carousel functionality for mobile view
 */

// Awards data
const awards = [
    {
        icon: '🏆',
        title: 'Prodalytics PM Case Competition',
        issuer: 'XLRI',
        date: 'Nov 2024',
        description: 'National winner in premier PM case competition. Featured for solving complex product challenges.'
    },
    {
        icon: '🌱',
        title: 'Fidelity Code Feast 1.0',
        issuer: 'Fidelity Investments',
        date: 'Jul 2022',
        description: 'Green Award for building CO2 footprint reduction browser extension. PPO awarded for impact.'
    },
    {
        icon: '🌍',
        title: 'Global Coding Challenge',
        issuer: 'Credit Suisse',
        date: 'Nov 2021',
        description: 'International Rank 84 out of 10,000+ participants worldwide. Problem-solving excellence.'
    },
    {
        icon: '🎓',
        title: 'Linux Foundation Scholarship',
        issuer: 'Linux Foundation',
        date: 'Jun 2021',
        description: 'Merit-based scholarship. One of 500 selected globally for open-source excellence.'
    },
    {
        icon: '⚖️',
        title: 'Hackathon Judge',
        issuer: 'NW Hacks & Hack the Mountains',
        date: 'Jun 2021',
        description: 'Evaluated innovative tech solutions. Mentored teams on product thinking and execution.'
    }
];

let currentAwardIndex = 0;

/**
 * Initialize carousel functionality
 * Sets up navigation buttons, dots, and renders first award
 */
export function initCarousel() {
    const awardsCarousel = document.querySelector('.awards-carousel');
    const prevAwardBtn = document.getElementById('prevAward');
    const nextAwardBtn = document.getElementById('nextAward');
    const carouselDots = document.getElementById('carouselDots');

    // Check if carousel elements exist
    if (!awardsCarousel || !prevAwardBtn || !nextAwardBtn || !carouselDots) {
        console.warn('Carousel elements not found');
        return;
    }

    /**
     * Render award at specified index
     * @param {number} index - Index of award to render
     */
    function renderAward(index) {
        const award = awards[index];
        awardsCarousel.innerHTML = `
            <div class="award-card">
                <div class="award-header">
                    <div class="award-icon">${award.icon}</div>
                </div>
                <div class="award-body">
                    <div class="award-title">${award.title}</div>
                    <div class="award-issuer">${award.issuer}</div>
                    <div class="award-date">${award.date}</div>
                    <p>${award.description}</p>
                </div>
            </div>
        `;
        updateDots();
    }

    /**
     * Update carousel dots to reflect current position
     */
    function updateDots() {
        carouselDots.innerHTML = '';
        awards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === currentAwardIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentAwardIndex = index;
                renderAward(currentAwardIndex);
            });
            carouselDots.appendChild(dot);
        });
    }

    // Previous button click handler
    prevAwardBtn.addEventListener('click', () => {
        currentAwardIndex = (currentAwardIndex - 1 + awards.length) % awards.length;
        renderAward(currentAwardIndex);
    });

    // Next button click handler
    nextAwardBtn.addEventListener('click', () => {
        currentAwardIndex = (currentAwardIndex + 1) % awards.length;
        renderAward(currentAwardIndex);
    });

    // Render initial award
    renderAward(currentAwardIndex);
}
