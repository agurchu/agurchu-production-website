let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///photto slideshow

let slideIndex = 1;
let timer;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function playSlideshow() {
  let playButton = document.querySelector(".play");
  if ((playButton.innerHTML = "&#9658;")) {
    playButton.innerHTML = "&#10074;&#10074;";
    timer = setInterval(function () {
      plusSlides(1);
    }, 2000);
  } else {
    playButton.innerHTML = "&#9658;";
    clearInterval(timer);
  }
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slideshow img");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
