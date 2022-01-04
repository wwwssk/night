var logo = document.getElementById('logo');
logo.onclick = function () {
	
	var line = document.querySelector('.shortline');
	line.classList.add('width_line');
	
	var click = document.querySelector('.header__main_click');
	click.classList.add('header__main_click___bigwidth');

	var colorbe = document.querySelector('.header__main_subtitle');
	colorbe.classList.add('header__link__colorbesubtitle');

	var colorbeg = document.querySelector('.header__main_title');
	colorbeg.classList.add('header__link__colorbe');
}
var click = document.getElementById('click');
click.onclick = function () {
	var footerheight = document.querySelector('.click');
	footerheight.style.padding = '60px 0 60px 0';

	var footerheight = document.querySelector('.click2');
	footerheight.style.padding = '60px 0 60px 0';

	var footerheight = document.querySelector('.click3');
	footerheight.style.padding = '60px 0 60px 0';

	var footerheight = document.querySelector('.click4');
	footerheight.style.padding = '60px 0 60px 0';
}







$(function () {
	$(window).scroll(function() {
	    $('.title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.shortline2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.subtitle').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRightBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-us__img1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUpBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-us__img2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUpBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-us__img3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUpBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-us__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDownBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-us__footer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
	});

})


//let numberOne = '35';
//let numberTwo = "22";
//let result = +numberOne + - +numberTwo;
//
//alert(result);
//
//alert('558' > 22);

//firstFor: for (let i = 0; i < 2; i++) {
	for (let iAm = 0; iAm < 6; iAm++) {
		if (iAm == 4) {
			continue firstFor;
		}
		alert(iAm);
	}
//}


let num = 0;
while (num < 6) {
	console.log(num);
	num++;
}

