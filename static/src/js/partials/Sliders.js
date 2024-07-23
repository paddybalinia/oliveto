document.addEventListener('DOMContentLoaded', function () {
	// Inicializa Swiper
	var swiperhow = new Swiper('#slider_how', {});

	// Añade event listeners a los enlaces del paginador
	var pagerLinks = document.querySelectorAll('#slider_how .pager__a');
	pagerLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			var slideIndex = parseInt(link.getAttribute('data-slide'));
			swiperhow.slideTo(slideIndex);
		});
	});
	var believe = new Swiper('#believe', {});

	// Añade event listeners a los enlaces del paginador
	var belivePagerLinks = document.querySelectorAll('#believe .pager__a');
	belivePagerLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			var slideIndex = parseInt(link.getAttribute('data-slide'));
			believe.slideTo(slideIndex);
		});
	});

	var books = new Swiper('.books .swiper-container', {
		pagination: {
			el: '.pager',
			clickable: true,
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
	});

	var interview = new Swiper('.interview .swiper-container', {
		pagination: {
			el: '.pager',
			clickable: true,
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
	});
	// var swiperhow = new Swiper('.swiper_hero', {});
	var swiper_hero = new Swiper('.hero_swiper .swiper-container', {
		pagination: {
			el: '.pager',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 'auto',
		// spaceBetween: 30,
	});
});
