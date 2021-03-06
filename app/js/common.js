$( document ).ready(function() {

	$('.furnaces__slider').slick({
		dots: true,
	});

	$('.projects__sider').slick({
		dots: false,
		fade: false
	});

	$('.feedback__slider').slick({
		dots: true,
	});

	//open full feedback on mobile version in feedback__slider
	$(window).on('resize orientationchange load', function() {
		
		if ( $(window).width() < 768 ) {
			$('.feedback__open').on('click', function(e){
				e.preventDefault();
				$(this).prev('.feedback__text').toggleClass('feedback__text_open');
			});

			$('.feedback__slider .slick-arrow').on('click', function(){
				$('.feedback__text').each(function(indx, element){
					if($(element).hasClass('feedback__text_open')) {
						$(element).removeClass('feedback__text_open');
					}
				});
			});
		}
	});

	//__________________________________
	
	$(window).on('resize orientationchange load', function() {
		let $slider = $('.services__slider');
		if ( $(window).width() >= 768 ) {
			// console.log('Desctop!!!');
			if ( $slider.hasClass('slick-initialized') ) {
				$slider.slick('unslick');
			}
		} else {
			// console.log('Mobile!!!');
			if ( !$slider.hasClass('slick-initialized') ) {
				$slider.slick({
					dots: false
				});
			}
		}
	});

	$(window).on('resize orientationchange load', function() {
		let $slider = $('.features__slider');
		if ( $(window).width() >= 768 ) {
			// console.log('Desctop!!!');
			if ( $slider.hasClass('slick-initialized') ) {
				$slider.slick('unslick');
			}
		} else {
			// console.log('Mobile!!!');
			if ( !$slider.hasClass('slick-initialized') ) {
				$slider.slick({
					dots: false
				});
			}
		}
	});


	$('.header__burger').on('click', function(e) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('locked');
		if ( !$('.header').hasClass('active') ) {
			$('.header').addClass('active');
		} else if ( !$('html').scrollTop() ) {
			$('.header').removeClass('active');
		}
	});

	$(document).on('scroll', function(e) {
		let top = $('html').scrollTop();
		if(top > 0) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
		
	});

});