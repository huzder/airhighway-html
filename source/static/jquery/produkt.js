$(document).ready(function() {

  $('.tooltip-bottom').tooltipster({
    side: 'bottom',
    theme: ['tooltipster-help']
  });

  $('.tooltip-bottom_black').tooltipster({
    side: 'bottom',
    theme: ['tooltipster-black']
  });

  $('.options').tabslet({
    animation: true
  });
  $('html.desktop .additional').tabslet({
    animation: true
  });
  $('html.desktop .basic').tabslet({
    animation: true
  });

  $('.page-gallery-wrap').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  $('body').on('click', '#palitra', function(){
    $(this).children().toggleClass('active');
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 750,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
  });

  $('.backButton').click(function(){
    $('.slider').slick('slickPrev');
  })
  
  $('.nextButton').click(function(){
    $('.slider').slick('slickNext');
  })

  $('.photo-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
  });
  
  $('#phone').mask('+7 (999) 999-99-99');

  $('body').on('click', '#jsCapcha', function(){
    $(this).addClass('active');
    $('#btnSubmit').removeClass('_disabled').prop('disabled', false);
  });

  $('body').on('click', '#jsCapcha.active', function(){
    $(this).removeClass('active');
    $('#btnSubmit').addClass('_disabled').prop('disabled', true);
  });

  setTimeout(function() {
    $('.bay-wrapper').css('opacity','1');
  }, 500);
});