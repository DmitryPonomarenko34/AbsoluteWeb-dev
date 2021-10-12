$(function () {

  let searchLink = $('.header__search-link');
  let searchForm = $('.header__form');
  let searchFormBtn = $('.header__form-btn');
  let body = $('body');

  searchLink.on('click', function (e) {
    e.preventDefault();
    searchForm.addClass('header__form--show');
    body.addClass('body-lock');
  })

  searchFormBtn.on('click', function () {
    searchForm.removeClass('header__form--show');
    body.removeClass('body-lock');
  })

  $(document).mouseup(function (e) {
    if (!searchForm.is(e.target) 
		  && searchForm.has(e.target).length === 0) { 
        searchForm.removeClass('header__form--show');
        body.removeClass('body-lock');
		}
  });
});