// Slider homepage
$('.owl-home').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

// Ingredients 
$('.product').click(function () {
    $('.popup').addClass('active');
});

$('.closeCross').click(function () {
    $('.popup').removeClass('active');
});

$('.each').click(function () {
    $(this).toggleClass('validate');
});

// Slider recettes
$('.owl-ing').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 5
        },
        600: {
            items: 7
        },
        1000: {
            items: 9
        }
    }
});