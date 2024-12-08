new WOW().init();


$(document).ready(function(){

    $(".owl-carousel.hero-layer-one-carousel").owlCarousel({
        rtl:true,
        items : 1,
        autoplay : true,
        autoplayTimeout: 7800,
        loop : true,
        dots: false,
        nav: false,
        smartSpeed : 100
    });

    $(".owl-carousel.hero-layer-two-carousel").owlCarousel({
        rtl:true,
        items : 1,
        autoplay : true,
        autoplayTimeout: 7800,
        loop : true,
        dots: false,
        nav: false,
        smartSpeed : 100
    });

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
        items : 1,
        autoplay : true,
        loop : true,
        dots: true,
        nav: true
        
    });

    $(".owl-carousel.three").owlCarousel({
        rtl:true,
        items : 1,
        loop : true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout :2000,
    });


  });

  let stars = document.querySelectorAll(".rating-star");
    for(let i=0; i<stars.length;i++){
        let currentElement = stars[i];
        let previousElements = stars.slice(0, i);
    }
    stars.forEach( star, function(){
        star.addEventistner('click', ()=>{
            star.innerHtml = '<p>dov</p>';
        });
    });

