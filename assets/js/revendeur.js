$(document).ready(function () {
	$(window).scroll(function () {
		const sc = $(window).scrollTop();
		if (sc > 100) {
			$('.fe-navbar').addClass('sticky');
		} else {
			$('.fe-navbar').removeClass('sticky');
		}
	});

	$(document).on('click', '#feNavbOpen', function (e) {
		$('#feNavbarFull').addClass('open');
	});
	$(document).on('click', '#feNavbClose', function (e) {
		$('#feNavbarFull').removeClass('open');
	});

	// ScrollReveal().reveal('.fe-hero-section-left', { delay: 400 });
});
