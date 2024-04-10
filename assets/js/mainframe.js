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
                  767: { slidesPerView: 2.3, spaceBetween: 30, },
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



    /* search form */
    if (window.innerWidth > SmallDesktopDown) {
     $(".search-site , .cross-btn").on("click", function (e) {
        e.preventDefault();
        $(".header-search-holder").animate({ width: "toggle" }, 700);
      });
    }
    if (window.innerWidth < SmallDesktopDown) {
      $(".search-site").on("click", function (e) {
        e.preventDefault();
        $('.header-search-holder').slideDown(200);
      });
      $(".cross-btn").on("click", function (e) {
        e.preventDefault();
        $('.header-search-holder').slideUp(200);
      });
    }

    
      $(".tool-menu.navbar-toggler").on("click", function () {
          $(this).toggleClass('open')
          $(".tool-menu.navbar-toggler .text").text($(".tool-menu.navbar-toggler .text").text() == 'Menu' ? 'Close' : 'Menu');
      });



      
    //   provinceGo
    const provinceGo = () => {
        const selectVal = document.getElementById('provinceSelect').value;
        if(selectVal !== ''){
            window.location.href = selectVal+ '.html';
        }
    };
    document.querySelector('#provinceGo').addEventListener('click', provinceGo);


    
    


});



var headerFixed = false;
var header = document.querySelector(".main-header.province");
var scrollPosition = 0;
var SmallDesktopDown = 1200;
var SmallDesktopUp = 1199.98;

scrollPosition = window.scrollY;
window.addEventListener("scroll", function () {
  if (header != null) {
    if (
      this.window.scrollY > header.clientHeight &&
      headerFixed == false &&
      scrollPosition > this.window.scrollY &&
      window.innerWidth > SmallDesktopUp
    ) {
      setStickyHeader();
    } else if (
      scrollPosition < this.window.scrollY &&
      headerFixed == true &&
      window.innerWidth > SmallDesktopUp ||
      this.window.scrollY < header.clientHeight &&
      headerFixed == true &&
      window.innerWidth > SmallDesktopUp
    ) {
      resetSticyHeader();
    }
  }

  scrollPosition = this.window.scrollY;
});
function setStickyHeader() {
  if (header != null) {
    document.body.style.paddingTop = header.clientHeight + "px";
    document
      .querySelector(":root")
      .style.setProperty("--header-height", header.clientHeight + "px");
    header.classList.add("sticky");
    this.setTimeout(function () {
      header.classList.add("show");
    }, 50);
    headerFixed = true;
  }
}

function resetSticyHeader() {
  document.body.style.paddingTop = null;
  header.classList.remove("sticky");
  header.classList.remove("show");
  headerFixed = false;
}