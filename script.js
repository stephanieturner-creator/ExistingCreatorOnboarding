// script.js

// Keyboard Navigation
function handleKeyboardNavigation(event) {
    const focusableElements = document.querySelectorAll('a, area, button, [tabindex]:not([tabindex="-1"]), [contenteditable]');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
        if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
}

document.addEventListener('keydown', handleKeyboardNavigation);

// Focus Management
function setFocus(element) {
    if (element) {
        element.focus();
    }
}

// Modal Handling with ARIA Support
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';
    setFocus(modal.querySelector('button')); // Set focus to the first button in modal
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
}

// Event Listeners for Accessibility Features
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => openModal(button.dataset.target));
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => closeModal(button.closest('.modal').id));
});
