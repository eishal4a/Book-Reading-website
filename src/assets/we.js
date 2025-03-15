document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('#left');
    const rightButton = document.querySelector('#right');
    const container = document.querySelector('#rect');
    const slides = document.querySelectorAll('.squ');

    let slideIndex = 0; // Start from the first slide

    function showDivs() {
        const totalSlides = slides.length;

        // Ensure the slideIndex wraps around
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1; // Go to the last slide
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0; // Go back to the first slide
        }

        // Calculate the translateX value
        const translateX = -slideIndex * (100 / totalSlides); // Adjust based on the number of slides
        container.style.transform = `translateX(${translateX}%)`;
    }

    // Event listeners for the buttons
    leftButton.addEventListener('click', () => {
        slideIndex--; // Move to the left
        showDivs();
    });

    rightButton.addEventListener('click', () => {
        slideIndex++; // Move to the right
        showDivs();
    });

    // Initial display
    showDivs();
});
leftButton.addEventListener('click', () => {
    console.log('Left button clicked'); // Log when left button is clicked
    slideIndex--; // Move to the left
    showDivs();
});

rightButton.addEventListener('click', () => {
    console.log('Right button clicked'); // Log when right button is clicked
    slideIndex++; // Move to the right
    showDivs();
});