const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.querySelector('.carousel-container');
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < container.children.length - 1) {
    currentSlide++;
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});