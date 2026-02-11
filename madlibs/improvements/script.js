(function () {
  "use strict";
  console.log("reading js");

  const form = document.querySelector("form");
  const overlay = document.querySelector(".overlay");
  const storyParagraph = document.querySelector(".overlay-content p");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const noun1 = document.querySelector("#noun1").value;
    const adjective1 = document.querySelector("#adjective1").value;
    const verb1 = document.querySelector("#verb1").value;
    const boba = document.querySelector("#boba").value;
    const verb2 = document.querySelector("#verb2").value;
    const adjective2 = document.querySelector("#adjective2").value;
    const noun2 = document.querySelector("#noun2").value;

    console.log(noun1, adjective1, verb1, boba, verb2, adjective2, noun2);

const story = `
Today I went to the boba shop with a <strong>${noun1}</strong> 
<strong>${adjective1}</strong>. 

I <strong>${verb1}</strong> to the counter and ordered a 
<strong>${boba}</strong>. 

While waiting, I looked around at the busy shop and the colorful drinks being made. 
I added extra boba pearls to my drink because I love boba. 

Suddenly, something <strong>${verb2}</strong> across the floor! 
Everyone turned to stare, and I immediately felt 
<strong>${adjective2}</strong>. 

After a moment, everything settled down, and I finally relaxed. 
I enjoyed my boba while listening to 
<strong>${noun2}</strong> music playing in the background.
`;



    storyParagraph.innerHTML = story;
    overlay.classList.add("active");

    form.reset();
  });

    overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
  });


})();
