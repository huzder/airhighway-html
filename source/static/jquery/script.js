// @codekit-prepend "../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../bower_components/tooltipster/dist/js/tooltipster.bundle.min.js";
// @codekit-prepend "../../../bower_components/slick-carousel/slick/slick.min.js";

$(document).ready(function() {

  $('body').on('click', '.burger', function(){
    $(this).toggleClass('active');
    $('header div nav, header div div').toggleClass('active');
  });

  $('body').on('click', 'header nav ul li span', function(){
    $(this).next('ul').toggleClass('active');
  });
});
