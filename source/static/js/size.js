$(document).ready(function() {

  // Images
  var images = {};
    images.Defalut = 'static/images/size/00.png';
    images.Brea = 'static/images/size/02.png';
    images.Wais = 'static/images/size/03.png';
    images.Hips = 'static/images/size/04.png';
    images.Hip = 'static/images/size/09.png';
    images.Neck = 'static/images/size/16.png';
    images.Size = 'static/images/size/01.png';

  // Title
  var titles = {};
    titles.Defalut = 'Измерения';
    titles.Brea = 'Грудь';
    titles.Wais = 'Талия';
    titles.Hips = 'Бедра'
    titles.Hip  = 'Бедро'
    titles.Neck = 'Шея';
    titles.Size = 'Рост';

  // Text
  var text = {};
    text.Defalut = 'Давайте начнем. Возьмите измерительную ленту и используйте её с умом.';
    text.Brea = 'Сделайте неглубокий вдох. Измерьте окружность груди по уровню сосков.';
    text.Wais = 'Измерьте окружность талии по уровню пупка.';
    text.Hips = 'Измерьте окружность по самому широкому месту ягодиц.';
    text.Hip  = 'Измерьте окружность бедра в самой широкой части так же, как идёт ножной обхват подвесной системы.';
    text.Neck = 'Измерьте окружность шеи.';
    text.Size = 'Ваш рост в обуви.';
  

  $('body').on('click', '.bay-wrapper-item_content-size-zamer li', function(){
    var elementId = this.id ;
    $('#image').attr('src', images[elementId]);
    $('#title').text(titles[elementId]);
  });

});
