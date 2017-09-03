/**
 * Created by VolkovML on 02/09/17.
 */

$('.navicon').click(function () {
    $('nav').slideToggle();
    $('nav').removeClass('hidden-xs');
    $('nav').removeClass('hidden-sm');
});

$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText: '',
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav: true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});