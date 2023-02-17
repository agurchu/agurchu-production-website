var images = document.querySelectorAll("#slideshow img");
var currentImageIndex = 0;
var homepage = document.querySelector("#homepage");

var intervalId = setInterval(function () {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;

  if (currentImageIndex === 0) {
    clearInterval(intervalId);
    homepage.style.display = "block";
    document.querySelector("#slideshow").style.display = "none";
  }
}, 150);
