/*Scroll js*/

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var navMenu = document.querySelector(".nav-menu");
  header.classList.toggle("sticky", window.scrollY > 0);

  navMenu.classList.toggle("sticky", window.scrollY > 0);
});

$(document).ready(function () {
  var path = window.location.pathname;
  $(".nav-link").each(function () {
    if ($(this).attr("href") === path) {
      $(this).addClass("active");
    }
  });
});

window.onscroll = function () {
  let sections = document.querySelectorAll(".nav-link");
  let scrollPos = window.scrollY + window.innerHeight;

  for (let i = 0; i < sections.length; i++) {
    let sectionTop = sections[i].offsetTop;
    let sectionBottom = sectionTop + sections[i].offsetHeight;

    if (scrollPos > sectionTop && scrollPos < sectionBottom) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};
