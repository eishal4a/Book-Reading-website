// JavaScript for sliding functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.squ');
const totalSlides = slides.length;

document.getElementById('left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlides();
});

document.getElementById('right').addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlides();
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}