// @codekit-prepend "../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../bower_components/tooltipster/dist/js/tooltipster.bundle.min.js";
// @codekit-prepend "../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../bower_components/slick-carousel/slick/slick.min.js";

$(document).ready(function() {

  $('body').on('click', '.burger', function(){
    $(this).toggleClass('active');
    $('header div nav, header div div').toggleClass('active');
  });

  $('body').on('click', 'header nav ul li span', function(){
    $(this).next('ul').toggleClass('active');
  });

  function loadPopupDeepLink() {
    var prefix = "#";
    var h = location.hash;

    if (document.g_magnific_hash_loaded === undefined && h.indexOf(prefix) === 0) {
      h = h.substr(prefix.length);
      var $url = $('*[data-url="' + h + '"]');

      if ($url.length) {
          document.g_magnific_hash_loaded = true;
          $url.get(0).click();
      }
    }
  }

  $('.popup-ajax').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll',
      callbacks: {
          open: function () {
              console.log('MP open');
          },
          close: function () {
              console.log('MP close');
              parent.location.hash = '';
          },
          change: function () {
              console.log('MP change');
              location.hash = "#" + this.currItem.el.data("url");
          }
      }
  });
  loadPopupDeepLink();
});
