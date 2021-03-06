$(window).scroll(function () {

    if ($('#banner').height() > $(window).scrollTop()) {
        $(".icon_hamburger").removeClass("is-active");

    }
    else if ($('#banner').height() < $(window).scrollTop()) {

        $(".icon_hamburger").addClass("is-active");

    }

})

$(window).resize(function() {
    let zoom = $(this).width() / 1920  
    $('#banner').css('zoom', zoom );
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".nav_side .list").toggleClass("is-active");
    });

    $('.reservation_link').click(function () {
        $('#reservation').css('transform', 'scale(1)');

    });
    $('#reservation_off').click(function () {
        $('#reservation').css('transform', 'scale(0 ,1)');
    });

});

console.log($(window).height());




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
        961: {
            slidesPerView: 4,
        },

        577: {
            slidesPerView: 3,
        },
    }
});

// var swiper_meun_item = new Swiper('.meun_item_swiper', {
//     // slidesPerView: 3,
//     loop: true,
//     effect: 'coverflow',
//     // grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     loopedSlides: 3,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 400,
//         modifier: 1,
//         slideShadows: true,

//     },

//     breakpoints: {

//         577: {
//             coverflowEffect: {
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 300,
//                 modifier: 1,
//                 slideShadows: true,

//             },
//         },
//     }
// });

var swiper_meun_item = new Swiper('.meun_item_swiper', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    grabCursor: true,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});