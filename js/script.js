$('.banner-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
});

//venobox js 
$(document).ready(function() {
    $('.venobox').venobox();
});


$('.Testimonial-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});



$('#colorful').colorfulTab();

$('.prefooter-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: '.left',
    nextArrow: '.right',
    centerMode: true,
    centerPadding: "0",

});