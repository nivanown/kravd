/*- mov-slider -*/
var swiper = new Swiper(".mov-slider .swiper", {
	slidesPerView: 2,
    spaceBetween: 60,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
  	},
  	navigation: {
    	nextEl: ".mov-slider .swiper-button-next",
    	prevEl: ".mov-slider .swiper-button-prev",
  	},
});

/*- reviews-slider -*/
var swiper = new Swiper(".reviews-slider .swiper", {
	slidesPerView: 3,
    spaceBetween: 20,
  	navigation: {
    	nextEl: ".reviews-slider .swiper-button-next",
    	prevEl: ".reviews-slider .swiper-button-prev",
  	},
});