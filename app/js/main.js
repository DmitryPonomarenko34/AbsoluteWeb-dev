$(function () {

  let searchLink = $('.header__search-link');
  let searchForm = $('.header__form');

  searchLink.on('click', function (e) {
    e.preventDefault();
    searchForm.toggleClass('header__form--show');
    $(this).toggleClass('header__search-link--active');
    if ($(this).hasClass('header__search-link--active')) {
      $('main div:first').css('padding-top', '20px');
    } else {
      $('main div:first').css('padding-top', '');
    }
  });


  function checkWidth() {

    let navbar = $('.navbar');
    let navbarScrollTop = navbar.offset().top;
    let firstBlockPadding = $('main div:first').css('padding-top');
    let navbarHeight = navbar.outerHeight();
    let paddingTop = navbarHeight + parseInt(firstBlockPadding.match(/\d+/));

    if ($(window).width() > 1201) {
      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > navbarScrollTop) {
          navbar.addClass('navbar--fixed');
          $('main div:first').css('padding-top', paddingTop);
        } else {
          navbar.removeClass('navbar--fixed');
          $('main div:first').css('padding-top', '');
        }
      });
    }


    if ($(window).width() >= 577) {
      $('.footer__item-colapse').addClass('show');
    }

    if ($(window).width() <= 576) {
      let footerItemTitle = $('.footer__item-title');

      footerItemTitle.on('click', function () {

        if ($(this).parent().hasClass('footer__item-box--active')) {
          $(this).parent().removeClass('footer__item-box--active');
        } else {
          footerItemTitle.parent().removeClass('footer__item-box--active');
          $(this).parent().addClass('footer__item-box--active');
        }
      });
    }

    if ($(window).width() <= 530) {
      $(".header").find(".header__conatiner").after($('.header__form'));
    } else {
      $('.header__form').appendTo('.header__inner');
    }
  }
  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });

  $(".rate__item").rateYo({
    starWidth: "14px",
    spacing: "6px",
    normalFill: "transparent",
    ratedFill: '#e7ab65',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });

  $(".rate__item svg").attr("stroke-width", "60").attr("stroke", "#e7ab65").attr("stroke-linecap", "round");


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
    infinite: false,
    asNavFor: '.slider-nav',
    responsive: [{
        breakpoint: 1025,
        settings: {
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 896,
        settings: {
          appendArrows: $('.carousel__btns'),
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 421,
        settings: {
          arrows: false,
          adaptiveHeight: true,
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    useTransform: false,
  });

});