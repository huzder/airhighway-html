$(document).ready(function() {

  $('.slider').slick({
    dots: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  });

  $('.tooltip-bottom').tooltipster({
    side: 'bottom',
    theme: ['tooltipster-black']
  });
});
