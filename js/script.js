// Menu Burger
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Slider
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(n) {
  index = n;
  if (index >= slide.length) {
    index = 0;
  } else if (index < 0) {
    index = slide.length - 1;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    dot.style.opacity = i === index ? "1" : "0.5";
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

setInterval(() => {
  showSlide(index + 1);
}, 3000);
