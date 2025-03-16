document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const container = document.querySelector('.squ-container');
    const items = document.querySelectorAll('.squ');
    
    // Ensure items exist
    if (items.length === 0) {
        console.error("No items found in the squ-container.");
        return;
    }

    let itemWidth = items[0].offsetWidth + 20; // Initial width calculation (including margin)
    let currentIndex = 0;

    function updateDisplay() {
        // Calculate the maximum index based on the total width of the container
        const maxIndex = Math.ceil(container.scrollWidth / itemWidth) - 1; // Use scrollWidth for total width
        if (currentIndex < 0) currentIndex = 0; 
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        
        console.log(`Current Index: ${currentIndex}, Max Index: ${maxIndex}, Item Width: ${itemWidth}`);
        
        // Apply smooth transition
        container.style.transition = 'transform 0.5s ease'; // Add transition
        container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    leftButton.addEventListener('click', function() {
        currentIndex--; 
        updateDisplay();
    });

    rightButton.addEventListener('click', function() {
        currentIndex++;
        updateDisplay();
    });

    // Update itemWidth and display on window resize
    window.addEventListener('resize', function() {
        itemWidth = items[0].offsetWidth + 20; // Recalculate item width
        updateDisplay(); // Update display after resizing
    });

    updateDisplay(); // Initial display update
});