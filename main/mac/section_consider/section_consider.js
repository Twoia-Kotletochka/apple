const carouselContainer = document.querySelector(".carousel-container");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const totalSlides = slides.length;
let visibleSlides = 3; // define how many slides are visible at once
let slidePosition = 0;

const btnPrev = document.querySelector("#prevBtn");
const btnNext = document.querySelector("#nextBtn");

btnPrev.disabled = true;
btnPrev.style.opacity = "0.5";

btnPrev.addEventListener("click", moveToPrevSlide);
btnNext.addEventListener("click", moveToNextSlide);

function checkPosition() {
    btnPrev.disabled = slidePosition === 0 ? true : false;
    btnNext.disabled = slidePosition >= totalSlides - visibleSlides ? true : false;
}

function moveToNextSlide() {
    if (slidePosition < totalSlides - visibleSlides) {
        slidePosition++;
        moveCarouselTo(slidePosition);
        checkPosition();
    }
}

function moveToPrevSlide() {
    if (slidePosition > 0) {
        slidePosition--;
        moveCarouselTo(slidePosition);
        checkPosition();
    }
}

function checkPosition() {
    if (slidePosition === 0) {
        btnPrev.disabled = true;
        btnPrev.style.opacity = "0.5";
    } else {
        btnPrev.disabled = false;
        btnPrev.style.opacity = "1";
    }

    if (slidePosition >= totalSlides - visibleSlides) {
        btnNext.disabled = true;
        btnNext.style.opacity = "0.5";
    } else {
        btnNext.disabled = false;
        btnNext.style.opacity = "1";
    }
}

function moveCarouselTo(slidePosition) {
    carouselContainer.style.transform = 'translateX(-' + slidePosition * (100 / visibleSlides) + '%)';
}