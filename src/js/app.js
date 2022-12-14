import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


/*------------BurgerMenu----------------*/


const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu) {
	const headerBurg = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerBurg.classList.toggle('_active');
	})
};


/*------------Slider----------------*/

new Swiper('.feedback-slider', {

	navigation: {
		prevEl: '.swiper-button-prev__prev',
		nextEl: '.swiper-button-next__next'
	},

	hashNavigation: {
		watchState: false,
	},

	keyboard: {
		enabled: true,

		onlyInViewport: true,

		pageUpDown: true,

	},

	mousewheel: {
		sensitivity: 1,

	},


	slidesPerView: 2,

	simulateTouch: false,

	spaceBetween: 20,

	slidesPerGroup: 1,

	initialSlide: 0,

	/*autoplay: {
		delay: 1000,
		stopOnLastSlide: true,
		disableOnInteraction: true
	},
	*/

	speed: 700,

	breakpoints: {


		640: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		320: {
			spaceBetween: 20,
			slidesPerView: 1,
			centeredSlides: true,
		},
	},
});