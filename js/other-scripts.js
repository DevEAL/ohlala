$(document).ready(function(){
    $(window).scroll(function(){
        if($('.navbar').offset().top > 50){
          $('.navbar').addClass("navbar-scroll");
        } else {
          $('.navbar').removeClass("navbar-scroll");
        }
    });

    $("#getting-started")
    .countdown("2019/11/16", function(event) {
      $(this).text(
        event.strftime('%D : %H : %M : %S' )
      );
    });

    $('.owl-experience').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      navText: [
        '<i class="fa fa-play" aria-hidden="true"></i>',
        '<i class="fa fa-play" aria-hidden="true"></i>'
      ],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
      }
    });
});