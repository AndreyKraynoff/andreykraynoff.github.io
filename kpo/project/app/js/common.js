$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
  	items: 1,
  	autoplay: true,
  	autoplayTimeout: 8000,
  	loop: true,
  	autoplaySpeed: 1000
  });
  
  $(window).scroll(function () {
  	scrtop = $(this).scrollTop(); //сколько прокручено
  	wh = $('.header').height();  //высота header
  	fh = $('.footer').height();  //высота футера
  	f_off = $('.footer').offset().top; //расстояние футера от верхней части страницы
     if (scrtop > f_off-wh) {
        $('.header').addClass('sticked');
        $('.header').css({'top': +f_off-wh+'px'});
     }   
     else{
         $('.header').removeClass('sticked');
         $('.header').css({'top': 0});
     }
  });



});
