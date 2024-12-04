$(document).ready(function(){
    $(".owl-carousel.one").owlCarousel({
        rtl:true,
        loop : true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1100:{
                items:4
            }
        },
        dots: false,
        nav: true
    });

    $(".owl-carousel.two").owlCarousel({
        rtl:true,
        loop : true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1100:{
                items:4
            }
        },
        dots: false,
        nav: true
        
    });

  });