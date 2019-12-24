$( document ).ready(function() {

	console.log( 'JQuery!!!' );

	$('.furnaces__slider').slick({
		dots: true
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