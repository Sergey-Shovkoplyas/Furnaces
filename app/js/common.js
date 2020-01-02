$( document ).ready(function() {

	$('.furnaces__slider').slick({
		dots: true
	});
	
	$(window).on('resize orientationchange load', function() {
		let $slider = $('.services__slider');
		if ( $(window).width() >= 768 ) {
			console.log('Desctop!!!');
			if ( $slider.hasClass('slick-initialized') ) {
				$slider.slick('unslick');
			}
		} else {
			console.log('Mobile!!!');
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