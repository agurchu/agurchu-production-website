const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
document.querySelectorAll(".nav__item--Opt").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

///opens slideshow under portfolio section

const photoOpen = document.querySelector(".portfolio .container .box .image");
const photoBtn = document.querySelector(".photobtn");
const photoSlideDiv = document.querySelector(".slideshow-container");
const photoClose = document.querySelector(".slideshow-container .cross");

photoOpen.addEventListener("click", () => {
  photoSlideDiv.classList.add("active");
});
photoBtn.addEventListener("click", () => {
  photoSlideDiv.classList.add("active");
});

photoClose.addEventListener("click", () => {
  photoSlideDiv.classList.remove("active");
});
