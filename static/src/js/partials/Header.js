(function () {
  "use strict";

  var Header = document.querySelector(".header"),
    lastScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop,
    ticking = false;
  // Constructor
  function Constructor() {
    window.addEventListener("scroll", onScroll);
  }

  /**
   * Evento onScroll
   * @return void
   */
  function onScroll() {
    lastScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;

    requestTick();
  }
  /**
   * Validamos que se haya ejecutado correctamente el onScroll() antes de pintar
   * un nuevo frame.
   * @return void
   */
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  /**
   *
   *
   * @return void
   */
  function update() {
    var scrollPosition = lastScrollY;

    Header.classList[scrollPosition >= 70 ? "add" : "remove"](
      "header--beforesticky"
    );
    Header.classList[scrollPosition >= 100 ? "add" : "remove"]("animation");

    Header.classList[scrollPosition > 400 ? "add" : "remove"]("fixed");

    ticking = false;
  }
  // Export
  window.Header = Constructor();
})();
