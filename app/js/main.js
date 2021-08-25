$('.collapse__head').click(function(e) {
    e.preventDefault();

    var $this = $(this);
    if ($this.next().hasClass('open')) {
        $this.next().removeClass('open');
        $this.next().slideUp(350);
        $this.toggleClass('open');
    } else {
        $this.parent().find('.collapse__body').removeClass('open');
        $this.parent().find('.collapse__body').slideUp(350);
        $this.toggleClass('open');
        $this.next().toggleClass('open');
        $this.next().slideToggle(350);
    }
});

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
    $('.menu-mob').addClass('open');
    $('body').addClass('lock');
});

$('.menu-mob__close').click(function() {
    $('.menu-mob').removeClass('open');
    $('body').removeClass('lock');
})

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
