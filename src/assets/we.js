document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const rect = document.getElementById('rect');
    let scrollAmount = 0;

    leftButton.addEventListener('click', function() {
        scrollAmount -= 300; // Adjust the scroll amount as needed
        rect.style.transform = `translateX(${scrollAmount}px)`;
    });

    rightButton.addEventListener('click', function() {
        scrollAmount += 300; // Adjust the scroll amount as needed
        rect.style.transform = `translateX(${scrollAmount}px)`;
    });
});