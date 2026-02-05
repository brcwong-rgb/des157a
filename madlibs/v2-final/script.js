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

    const story = `Today I went to the boba shop with a ${noun1} ${adjective1}. I ${verb1} to the counter and ordered a ${boba}. I added boba. Suddenly, something ${verb2} across the floor! I panicked and felt ${adjective2}! Finally, I enjoyed my boba while listening to ${noun2} music.`;

    storyParagraph.innerHTML = story;
    overlay.classList.add("active");

    form.reset();
  });

    overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
  });


})();
