(function () {
  "use strict";

  var lightbox = document.querySelector(".lightbox"),
    index = 0,
    body = document.querySelector("body");

  // Constructor
  function Constructor() {
    const btnClose = document.querySelectorAll("[data-lightbox-close]");
    const Link = document.querySelectorAll("[data-lightbox]");
    const lightboxNext = document.querySelector(".lightbox__next");

    for (let e = 0; e < btnClose.length; e++) {
      btnClose[e].addEventListener("click", CloseLightbox, false);
    }
    for (let e = 0; e < Link.length; e++) {
      Link[e].addEventListener("click", onClickLink, false);
    }
  }

  function onClickLink(e) {
    e.preventDefault();

    GetData(e.currentTarget);
    ToggleLightbox();
  }

  function GetData(e) {
    var bookData = e.parentNode.querySelector(".books__data");
    var bookImg = bookData.parentNode.querySelector(".books_item__img").src;
    var bookTitle = bookData.querySelector(".book__title").textContent;
    var bookComprar = bookData.querySelector(".book__comprar").href;
    var bookReview = bookData.querySelector(".book__reviews").href;
    var bookText = bookData.querySelector(".book__text").textContent;

    updateData({
      src: bookImg,
      title: bookTitle,
      comprar: bookComprar,
      review: bookReview,
      text: bookText,
    });
  }

  function updateData({
    src = "src",
    title = "titulo",
    comprar = "subtitulo",
    review = "year",
    text = "text",
  }) {
    var lightbox__img = document.querySelector(".lightbox__img"),
      lightbox__title = document.querySelector(".lightbox__title"),
      lightbox__comprar = document.querySelector(".lightbox__comprar"),
      lightbox__reviews = document.querySelector(".lightbox__reviews"),
      lightbox__text = document.querySelector(".lightbox__text");
    lightbox__img.src = "";
    lightbox__img.src = src;
    lightbox__img.alt = title;
    lightbox__img.title = title;
    lightbox__title.textContent = title;
    lightbox__comprar.href = comprar;
    lightbox__reviews.href = review;
    lightbox__text.textContent = text;
  }

  function ToggleLightbox() {
    lightbox.classList.toggle("active");
    body.classList.toggle("lightbox-active");
  }

  function CloseLightbox() {
    lightbox.classList.toggle("active");
    body.classList.toggle("lightbox-active");
  }

  // Export
  window.Lightbox = Constructor();
})();
