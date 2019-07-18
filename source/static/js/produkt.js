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

  setTimeout(function() {
    $('.bay-wrapper').css('opacity','1');
  }, 500);
});