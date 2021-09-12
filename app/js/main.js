var menu = ['Навчальні кабінети', 'Вільний простір', 'Фізична активність', 'Харчування']
var carouselArticles = new Swiper('.organisation__carousel', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 25,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            if ($(window).width() < 992) {
                return '<span class="' + className + '"></span>';
            }
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    breakpoints: {
        320: {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
        },
    }
});

var carouselSchedule = new Swiper('.schedule__carousel', {
    loop: true,
    noSwiping: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('.header__toggle').click(function() {
    $('.header__menu').toggleClass('open');
    $('body').addClass('lock');
});

$('.menu-mob .link').click(function() {
    $('.menu-mob').removeClass('open');
    $('body').removeClass('lock');
})

$(document).ready(function(){
    $('.anchor-link').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {});
    });
});

//modal
$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
    $('body').toggleClass('modal-open');
});
//modal

$('.select > .select__head').on('click', function(e) {
    e.stopPropagation();
    var $this = $(this);

    $this.next().addClass('open');
});

$('.select__body .item').on('click', function(e) {
    var $this = $(this);

    $this.parent().parent().parent().find('.select__head').find('.title').html($this.html());
});

$(document).click(function() {
    $('.select__body').removeClass('open');
});
