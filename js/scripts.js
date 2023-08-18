﻿/*- filters -*/
$('.filters__all-btn').click(function() {
	$('.filters').addClass('show');
	if ($('.filters__all-btn').text() == 'Все фильтры') {
		$(this).text('Скрыть');
	} else {
    	$(this).text('Все фильтры');
    	$('.filters').removeClass('show');
  	}
});

/*- filters__btn -*/
$('.filters__btn').click(function(){ 
	const currentElement = $(this).next('.filters__dropdown'); 
	$('.filters__dropdown').not(currentElement).removeClass('active');  
	currentElement.toggleClass('active'); 
});

$('.filters__close-btn').click(function() {
	$('.filters__dropdown').removeClass('active');
});

/*- price -*/
let priceGap = 0;

document.querySelectorAll('.price-slider').forEach((container) => {
  	const rangeInput = container.querySelectorAll('.range-input input'),
    priceInput = container.querySelectorAll('.price-input input'),
    range = container.querySelector('.slider .progress');

  	priceInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      	let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      	if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        	if (e.target.className === 'input-min') {
          		rangeInput[0].value = minPrice;
          		range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
        } else {
          	rangeInput[1].value = maxPrice;
          	range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
        }
      }
    });
  })

  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      	let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      	if (maxVal - minVal < priceGap) {
        	if (e.target.className === 'range-min') {
          		rangeInput[0].value = maxVal - priceGap;
        	} else {
          		rangeInput[1].value = minVal + priceGap;
        	}
      	} else {
        	priceInput[0].value = minVal;
        	priceInput[1].value = maxVal;
        	range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
        	range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      	}
    });
  });
});

/*- catalog-products_ -*/
$('.catalog-products__item:lt(8)').show();

$('#load-more').click(function() {
	event.preventDefault();
	var $hidden = $('.catalog-products__item:hidden');
	$($hidden).slice(0, 4).fadeIn(800);
	if ($hidden.length == 4) {
		$('#load-more').addClass('btn_hidden');
	}
});

/*- page-navi -*/
$('.page-navi__numb').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    event.preventDefault();
	var $hidden = $('.catalog-products__item:hidden');
	$($hidden).slice(0, 4).fadeIn(800);
	if ($hidden.length == 4) {
		$('#load-more').addClass('btn_hidden');
	}
});

/*- mov-slider -*/
var swiper = new Swiper('.mov-slider .swiper', {
	slidesPerView: 2,
    spaceBetween: 60,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
  	},
  	navigation: {
    	nextEl: '.mov-slider .swiper-button-next',
    	prevEl: '.mov-slider .swiper-button-prev',
  	},
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider .swiper', {
	slidesPerView: 3,
    spaceBetween: 20,
  	navigation: {
    	nextEl: '.reviews-slider .swiper-button-next',
    	prevEl: '.reviews-slider .swiper-button-prev',
  	},
});

$(() => {
  $('[data-role="dropdown"]').on('change', (e) => {
    const wrapper = $(e.currentTarget);
    const button = wrapper.find('[data-role="button"]');
    const controls = wrapper.find('[data-default-value]');

    const isChanged = [...controls].some((control) => {
      switch(control.type) {
        case 'number': {
          return control.value !== control.defaultValue
        }
    	case 'radio': {}
        case 'checkbox': {
          return control.checked !== (control.defaultValue === '0')
        }
      }
    });

    if(isChanged) {
      button.addClass('selected')
    } else {
      button.removeClass('selected')
    }
  })
});