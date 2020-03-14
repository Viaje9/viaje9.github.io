$(window).scroll(function () {
            
    if ( $('#banner').height()>$(window).scrollTop()){
        $(".icon_hamburger").removeClass("is-active");
  
    }
    else if ( $('#banner').height()<$(window).scrollTop()){
       
        $(".icon_hamburger").addClass("is-active");
     
    }
   
    console.log($(window).scrollTop()+200) 
})

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".hamburger, .nav_side ul").toggleClass("is-active");
    });

    $('.reservation_link').click(function () {
        $('#reservation').css('transform','scale(1)');
        console.log('aaa');
    });
    
    $('#reservation_off').click(function () {
        $('#reservation').css('transform','scale(0 ,1)');
    });
    
});




AOS.init();

window.onload = function () {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

var swiper_news = new Swiper('.news_swiper', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        961: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
    }
});

var swiper_meun_list = new Swiper('.meun_list_swiper', {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        961: {
            slidesPerView: 4,
        },

        577: {
            slidesPerView: 3,
        },
    }
});

var swiper_meun_item = new Swiper('.meun_item_swiper', {
    slidesPerView: 5,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loopedSlides: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,

    },

    breakpoints: {

        577: {
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,

            },
        },
    }
});