let images = document.querySelectorAll("#slideshow img");
let currentImageIndex = 0;
let homepage = document.querySelector("#homepage");

let intervalId = setInterval(function () {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;

  if (currentImageIndex === 0) {
    clearInterval(intervalId);
    homepage.style.display = "block";
    document.querySelector("#slideshow").style.display = "none";
  }
}, 150);
