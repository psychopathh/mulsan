$(function () {
  // menu
  $(document).ready(function(){
    var touch   = $('.icon');
    var menu  = $('.menu');

    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });


    $(window).resize(function(){
      var w = $(window).width();
      if(w > 767 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $(".click-link").on('click', function() {
    $(this).toggleClass('active').next().slideToggle(500);
  });

  if ($('.slider-photo').length) {
    $('.slider-photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-thumb'
    });
    $('.slider-thumb').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-photo',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  }


//Фенси
$(".fancybox").fancybox({
  padding: 0
});
//Фенси с миниатюрами
$(".fancybox-thumb").fancybox({
  prevEffect  : 'fade',
  nextEffect  : 'fade',
  openEffect  : 'fade',
  closeEffect : 'fade',
  autoSize   : false,
  autoResize  : false,
  helpers : {
    title : {
      type: 'outside'
    },
    thumbs  : {
      width : 50,
      height  : 50
    }
  }
});
});

