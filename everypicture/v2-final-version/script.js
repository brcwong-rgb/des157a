(function () {

"use strict";

console.log("JS running");


const carousel = document.querySelector("#carousel");
const images = document.querySelectorAll("#carousel img");
const overlay = document.querySelector("#overlay");
const overlayTitle = document.querySelector("#overlay-title");
const overlayText = document.querySelector("#overlay-text");

images.forEach(function(image) {
image.addEventListener("mouseenter", function() {
carousel.style.animationPlayState = "paused";

});


image.addEventListener("mouseleave", function() {
if (overlay.classList.contains("hidden")) {
carousel.style.animationPlayState = "running";

}

});


image.addEventListener("click", function() {
carousel.style.animationPlayState = "paused";
overlay.classList.remove("hidden");
overlayTitle.textContent = image.alt;
overlayText.textContent =
"This image captures the texture detail of scrap metal transformed into sculpture. Take a moment to appreciate the engineering excellence and craftsmanship that turn discarded materials into expressive works of art.";

});

});


overlay.addEventListener("click", function() {
overlay.classList.add("hidden");
carousel.style.animationPlayState = "running";

});



const carOverlay = document.querySelector("#car-overlay");
const carOverlayImg = document.querySelector("#car-overlay-img");

const areaFront = document.querySelector("#area-front");
const areaInterior = document.querySelector("#area-interior");


areaFront.addEventListener("click", function(e){
    e.preventDefault();
    carOverlayImg.src = "images/front.jpg";
    carOverlay.classList.remove("hidden");
});


areaInterior.addEventListener("click", function(e){
    e.preventDefault();
    carOverlayImg.src = "images/inside.jpg";
    carOverlay.classList.remove("hidden");
});

carOverlay.addEventListener("click", function(){
    carOverlay.classList.add("hidden");
});


})();