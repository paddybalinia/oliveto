(function () {
  "use strict";

  // Constructor
  function Constructor() {
    const btnToggle = document.querySelectorAll(".who_are__button");

    for (let e = 0; e < btnToggle.length; e++) {
      btnToggle[e].addEventListener("click", ToggleWhoWeAre, false);
    }
  }

  function ToggleWhoWeAre() {
    const whoAreContent =
      this.parentElement.parentElement.parentElement.querySelectorAll(
        ".who_are__content"
      );
    if (whoAreContent.length === 2) {
      whoAreContent[0].classList.toggle("active");
      whoAreContent[1].classList.toggle("active");
    }
  }

  // Export
  window.WhoWeAre = Constructor();
})();
