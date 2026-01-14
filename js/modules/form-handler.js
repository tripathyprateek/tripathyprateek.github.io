/**
 * Form Handler Module
 * Handles contact form submission with FormSubmit.co integration
 */

/**
 * Initialize contact form handler
 * Sets up form submission with loading states and error handling
 */
export function initFormHandler() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    // Check if form elements exist
    if (!contactForm || !submitBtn) {
        console.warn('Contact form elements not found');
        return;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Update button to loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://formsubmit.co/ajax/tripathyprateek@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success state
                submitBtn.textContent = '✓ Message Sent!';
                submitBtn.classList.add('success');
                contactForm.reset();

                // Reset button after 5 seconds
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 5000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            // Error state
            submitBtn.textContent = '✗ Failed to Send';
            submitBtn.classList.add('error');

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.classList.remove('error');
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}
