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

    $(".owl-carousel.four").owlCarousel({
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

  //rating starts //////////////////////////////////////////////////////////////
  let starts = document.querySelectorAll('.rating-star');
  starts.forEach((star, index) => {
    star.addEventListener('click', () =>{
        starts.forEach((s,i) => {
            if(i<=index){
                s.innerHTML = '<i class="fa-solid fa-star"></i>';
            }else{
                s.innerHTML = '<i class="fa-regular fa-star"></i>';
            }
        });
    });
    
  });

  // increasing numbers //////////////////////////////////////////////////////////
  let numbersSection = document.querySelector('.numbers');
  let started =false;
  window.onscroll=function(){
    if(window.scrollY >= numbersSection.offsetTop - 300){
        let numbers = document.querySelectorAll('.increasing-number');
        if(started == false){

            numbers.forEach(number => {
        
            let endValue = number.dataset.val;
                
            let x = window.setInterval(() => {
            number.textContent ++;

            if(number.textContent == endValue){clearInterval(x);}

            },Math.ceil(1000/endValue)); 
            });
        }
        started = true; 
    }
  };

   //price range ////////////////////////////////////////////////////////////////
   let priceRange = document.getElementById('price-range');
   let priceRangeValue = document.getElementById('price-range-value');
   priceRange.oninput = function(){
     priceRangeValue.innerHTML = this.value;
   };
 
   let priceRange2 = document.getElementById('price-range2');
   let priceRangeValue2 = document.getElementById('price-range-value2');
   priceRange2.oninput = function(){
     priceRangeValue2.innerHTML = this.value;
   };

 





    
