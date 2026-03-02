(function () {

"use strict";

console.log("JS running");


const carousel = document.querySelector("#carousel");
const images = document.querySelectorAll("#carousel img");
const overlay = document.querySelector("#overlay");
const overlayTitle = document.querySelector("#overlay-title");
const overlayText = document.querySelector("#overlay-text");

const imageDescriptions = {
  "Manthey Porshe 911 GT3 rs rim":
    "The Manthey GT3 RS rim feels engineered for the track. The lightweight design and aggressive cutouts show how Porsche prioritizes performance.",

  "Exhaust Setup of a Lamborghini Huracán":
    "The Huracán exhaust is pure power. The symmetry and heat-stained metal make the rear is ready for the track.",

  "s58 engine bay of a G80 M3":
    "The S58 engine represents modern BMW performance. It’s less raw than older M cars, but incredibly refined and powerful.",

  "Rear of a Nissan GT-R":
    "The GT-R’s circular taillights are instantly recognizable. Even from behind, the design communicates legacy and dominance. It’s aggressive but clean.",

  "Rim of an M5":
    "The M5 rim feels subtle but intentional. It a sleeper sedan, yet it carries serious performance underneath.",

  "f80 engine bay":
    "The F80 engine bay feels more mechanical and exposed compared to newer generations. It represents a transitional era between analog feel and digital infusion.",

  "G82 Rims":
    "The G82 wheel design is bold and seperates itself form most black rims."
};

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
overlayText.textContent = imageDescriptions[image.alt];


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