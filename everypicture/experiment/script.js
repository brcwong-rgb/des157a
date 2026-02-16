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

        overlayTitle.textContent = "Lorem Ipsum";

        overlayText.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    });

});


overlay.addEventListener("click", function() {

    overlay.classList.add("hidden");

    carousel.style.animationPlayState = "running";

});

})();

