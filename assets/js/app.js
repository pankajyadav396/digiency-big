

$('.slick').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }
    ]
});

$('.slick2').slick({
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    Infinity: true,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

