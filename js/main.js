$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.slider').on('input change', function(){
        $('.slider-num').text($('.slider').val());
    });

    $('.slider').on('input change', function(){
        $('.slider-date__amount').text($('.slider').val());
    });

});