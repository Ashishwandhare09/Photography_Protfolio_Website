var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// ....................crousel........... ...........................................
const slider23 = document.querySelector('.slider23');
const sliderInner23 = document.querySelector('.slider-inner23');
const slides23 = document.querySelectorAll('.slide23');
const prevBtn23 = document.querySelector('.prev-btn23');
const nextBtn23 = document.querySelector('.next-btn23');

let currentIndex23 = 0;
const numVisibleSlides23 = 3;

function updateSlider() {
  const slideWidth23 = 100 / numVisibleSlides23; 
  const sliderWidth23 = slideWidth23 * slides23.length; 
  const newPos23 = currentIndex23 * -slideWidth23; 

  sliderInner23.style.width = `${sliderWidth23}%`; 
  sliderInner23.style.transform = `translateX(${newPos23}%)`; 
}

prevBtn23.addEventListener('click', () => {
  currentIndex23 = Math.max(0, currentIndex23 - 1);
  updateSlider();
});

nextBtn23.addEventListener('click', () => {
  const maxIndex = slides23.length - numVisibleSlides23;
  currentIndex23 = Math.min(maxIndex, currentIndex23 + 1);
  updateSlider();
});
updateSlider();

