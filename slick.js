//$('.slider').slick({
//    autoplay: false,
//    autoplaySpeed: 5000,
//    dots: true,
//    slidesToShow: 4,
//    slidesToScroll: 1
//});

$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
        //767px以下の時の処理
        $('.slider').slick({
            autoplay: false,
            autoplaySpeed: 5000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } 
    
    else {
        //768pxより大きい時の処理
        $('.slider').slick({
            autoplay: false,
            autoplaySpeed: 5000,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    }
});
