// Get the elements
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const container = document.querySelector('#rect');

// Set initial position to 0
let position = 0;

// Get all the "squ" divs
const items = document.querySelectorAll('.squ');

// Calculate the total number of items to slide
const totalItems = items.length;

// Slide left function
function slideLeft() {
  if (position > 0) {
    position--;
    updatePosition();
  }
}

// Slide right function
function slideRight() {
  if (position < totalItems - 1) {
    position++;
    updatePosition();
  }
}

// Update the container's transform property to slide
function updatePosition() {
  container.style.transform = `translateX(-${position * 100}%)`;
}

// Add event listeners to the buttons
leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);
