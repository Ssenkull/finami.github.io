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

    $('.legal-info__btn').on('click', function(){
        $('.legal-more').toggleClass('legal-more--active');
    });

    $('.legal-info__btn').on('click', function(){
        $('.legal-info__btn').text(('Close'));
    });

});