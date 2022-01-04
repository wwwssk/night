$(document).ready(function() {
	$('.menu__btn,.menu__close').click(function(event) {
		$('.block1__menu,.menu__close').toggleClass('active');
	});
})