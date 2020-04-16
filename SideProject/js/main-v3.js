

$(window).resize(function() {
    let zoom = $(this).width() / 1920  
    $('#banner').css('zoom', zoom );

  
});



$(document).ready(function () {
    let zoom = $(this).width() / 1920  

    $(window).scroll(function () {
        if ($('#banner').height()*zoom > $(window).scrollTop()) {
            $(".icon_hamburger").removeClass("is-active");
    
        }
        else if ($('#banner').height()*zoom < $(window).scrollTop()) {
    
            $(".icon_hamburger").addClass("is-active");
    
        }
        
    })

    $('#banner').css('zoom', zoom );

    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".nav_side .list").toggleClass("is-active");
    });

    $('.reservation_link').click(function () {
        $('#reservation').css('display', 'block');

    });
    $('#reservation_off').click(function () {
        $('#reservation').css('display', 'none');
    });

    

});



AOS.init({
    disable: "mobile",
    
});

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
    // centeredSlides: true,
    breakpoints: {
        961: {
            slidesPerView: 2,
            spaceBetween: -40,
        },
        1367: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper_meun_list = new Swiper('.meun_list_swiper', {
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },

        577: {
            slidesPerView: 3,
        },
    }
});

var swiper_meun_item = new Swiper('.meun_item_swiper', {
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    effect: 'coverflow',
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

console.log();
 