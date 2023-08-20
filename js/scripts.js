/*- filters -*/
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

/*- filters -*/
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

//if (document.documentElement.clientWidth > 320) {

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
  $(this).addClass('active');
  event.preventDefault();
  var $hidden = $('.catalog-products__item:hidden');
  $($hidden).slice(0, 4).fadeIn(800);
  if ($hidden.length == 4) {
    $('#load-more').addClass('btn_hidden');
  }
});

/*- mov-slider -*/
var swiper = new Swiper('.mov-slider .swiper', {
  autoHeight: true,
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
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 39,
    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },  
});

/*- articles-slider -*/
var swiper = new Swiper('.articles-slider .swiper', {
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }, 
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider .swiper', {
  autoHeight: true,
	slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
	navigation: {
  	nextEl: '.reviews-slider .swiper-button-next',
  	prevEl: '.reviews-slider .swiper-button-prev',
	},
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }, 
});

/*- compilations-slider -*/
var swiper = new Swiper('.compilations-slider .swiper', {
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 19,
  loop: true,
  navigation: {
    nextEl: '#compilations-arrows .swiper-button-next',
    prevEl: '#compilations-arrows .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 19,
    },
  }, 
});

/*- brands-slider -*/
var swiper = new Swiper('.brands-slider .swiper', {
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 19,
  loop: true,
  navigation: {
    nextEl: '#brands-arrow .swiper-button-next',
    prevEl: '#brands-arrow .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    369: {
      slidesPerView: 2,
      spaceBetween: 19,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  }, 
});

/*- countries-slider -*/
var swiper = new Swiper('.countries-slider .swiper', {
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 19,
  loop: true,
  navigation: {
    nextEl: '#countries-arrows .swiper-button-next',
    prevEl: '#countries-arrows .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    369: {
      slidesPerView: 2,
      spaceBetween: 19,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  }, 
});

/*- sorting -*/
$('.sorting dt').click(function(){ 
  const currentElement = $(this).next('.sorting dd'); 
  $('.sorting dd').not(currentElement).removeClass('show');  
  currentElement.toggleClass('show'); 
});