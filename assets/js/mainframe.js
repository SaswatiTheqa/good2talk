$(document).ready(function () {
    // ===========   slider-students-feeling slider
    var swiper1 = new Swiper(".slider-students-feeling .swiper-container", {
        slidesPerView: 3.6,
        spaceBetween: 30,
        // centeredSlides: true,
        navigation: {
            nextEl: '.slider-students-feeling .swiper-button-next',
            prevEl: '.slider-students-feeling .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  0: { slidesPerView: 1.2, spaceBetween: 20, },
                  440: { slidesPerView: 1.6, spaceBetween: 20, },
                  575: { slidesPerView: 2.1, spaceBetween: 20, },
                  767: { slidesPerView: 2.8, spaceBetween: 30, },
                  1024: { slidesPerView: 3.2, spaceBetween: 30, },
                  1366: { slidesPerView: 3.6, spaceBetween: 30, },
              }
        
      });

    // ===========   insta-feed slider

      var swiper1 = new Swiper(".insta-feed .swiper-container", {
        slidesPerView: 3.02,
        spaceBetween: 30,
        // centeredSlides: true,
        navigation: {
            nextEl: '.insta-feed .swiper-button-next',
            prevEl: '.insta-feed .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  0: { slidesPerView: 1.2, spaceBetween: 20, },
                  440: { slidesPerView: 1.6, spaceBetween: 20, },
                  575: { slidesPerView: 2.1, spaceBetween: 20, },
                  767: { slidesPerView: 2.8, spaceBetween: 30, },
                  1024: { slidesPerView: 3.2, spaceBetween: 30, },
                  1366: { slidesPerView: 3.02, spaceBetween: 30, },
              }
        
      });
    
    //   scrollTop
    $("#scrollTop").click(function () {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
           $('.on-header').addClass('sticky');
        } else {
           $('.on-header').removeClass('sticky');
        }
    });

   

    

    /* search form */

    $(".search-site").click(function () {
        $('.header-search-holder').addClass('d-block');
        // $(".header-search-holder").animate({
        //     width: "toggle"
        //   }, 800);
    });

    $(".cross-btn").click(function () {
        $('.header-search-holder').removeClass('d-block');
    });
 

    //   provinceGo
    const provinceGo = () => {
        const selectVal = document.getElementById('provinceSelect').value;
        if(selectVal !== ''){
            window.location.href = selectVal+ '.html';
        }
    };
    document.querySelector('#provinceGo').addEventListener('click', provinceGo);

    // const searchForm = (e) => {
    //     e.preventdefault()
    // };
    // document.querySelector('#searchForm').addEventListener('click', searchForm);

});






