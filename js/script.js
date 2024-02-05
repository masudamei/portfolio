$(function () {


    //ハンバーガー
    $('.sp_btn,.sp_nav li').on('click', function () {
        // ここにクリックした時の挙動を記述
        $(".sp_nav").fadeToggle();
        $('.sp_btn').toggleClass('open')
    });

    //フェードイン
    jQuery(function ($) {
        var fadeIn = $('.fade-in');
        $(window).on('scroll', function () {
            $(fadeIn).each(function () {
                var offset = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > offset - windowHeight + 150) {
                    $(this).addClass("scroll-in");
                }
            });
        });
    });







});
