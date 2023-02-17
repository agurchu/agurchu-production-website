let currentSlide = 0;
let currentPrice = 0;
///slideshow for the home page videoslide
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const homecontents = document.querySelectorAll(".home__content");

///for home page video slide
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  homecontents.forEach((homecontent) => {
    homecontent.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  homecontents[manual].classList.add("active");
};

///for home page video slide
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
}, 5000);
