const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let slidePosition = 0;

document.querySelector("#prevBtn").addEventListener("click", moveToPrevSlide);
document.querySelector("#nextBtn").addEventListener("click", moveToNextSlide);

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    moveCarouselTo(slidePosition);
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    moveCarouselTo(slidePosition);
}

function moveCarouselTo(slidePosition) {
    carouselContainer.style.transform = 'translateX(-' + slidePosition * 30 + '%)';
}