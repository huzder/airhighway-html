$(document).ready(function() {

  // Images Man
  var imagesMan = {};
    imagesMan.Defalut =          'static/images/size/m0.png';
    imagesMan.Breast =           'static/images/size/m1.png';
    imagesMan.HalfChest =        'static/images/size/m2.png';
    imagesMan.Waist =            'static/images/size/m3.png';
    imagesMan.Hips =             'static/images/size/m4.png';
    imagesMan.Hip =              'static/images/size/m5.png';
    imagesMan.Biceps =           'static/images/size/m6.png';
    imagesMan.Elbow =            'static/images/size/m7.png';
    imagesMan.Wrist =            'static/images/size/m8.png';
    imagesMan.Palm =             'static/images/size/hand.png';
    imagesMan.Crown =            'static/images/size/m10.png';
    imagesMan.Neck =             'static/images/size/m11.png';
    imagesMan.Winch =            'static/images/size/m12.png';
    imagesMan.Knee =             'static/images/size/m13.png';
    imagesMan.Caviar =           'static/images/size/m14.png';
    imagesMan.Shin =             'static/images/size/m15.png';
    imagesMan.Foot =             'static/images/size/foot.png';
    imagesMan.FrontLength =      'static/images/size/m17.png';
    imagesMan.LengthBack =       'static/images/size/m18.png';
    imagesMan.Zsize =            'static/images/size/m19.png';
    imagesMan.FrontLengthWaist = 'static/images/size/m20.png';
    imagesMan.BackWaistLength =  'static/images/size/m21.png';
    imagesMan.Shoulder =         'static/images/size/m22.png';
    imagesMan.ElbowLength =      'static/images/size/m23.png';
    imagesMan.Sleeve =           'static/images/size/m24.png';
    imagesMan.ElbowLengthBack =  'static/images/size/m25.png';
    imagesMan.Shoulders =        'static/images/size/m26.png';
    imagesMan.Feet =             'static/images/size/m27.png';
    imagesMan.LegsKnee =         'static/images/size/m28.png';
    imagesMan.Shoes =            'static/images/size/size.png';
    imagesMan.Growth =           'static/images/size/m30.png';
    imagesMan.Weight =           'static/images/size/m31.jpg';

  // Images woman
  var imagesWoman = {};
    imagesWoman.Defalut =          'static/images/size/w0.png';
    imagesWoman.Breast =           'static/images/size/w1.png';
    imagesWoman.HalfChest =        'static/images/size/w2.png';
    imagesWoman.ExtraBreasts =     'static/images/size/w33.png';
    imagesWoman.ExtraBefore =      'static/images/size/w34.png';
    imagesWoman.Waist =            'static/images/size/w3.png';
    imagesWoman.ExtraWaist =       'static/images/size/w32.png';
    imagesWoman.Hips =             'static/images/size/w4.png';
    imagesWoman.Hip =              'static/images/size/w5.png';
    imagesWoman.Biceps =           'static/images/size/w6.png';
    imagesWoman.Elbow =            'static/images/size/w7.png';
    imagesWoman.Wrist =            'static/images/size/w8.png';
    imagesWoman.Palm =             'static/images/size/hand.png';
    imagesWoman.Crown =            'static/images/size/w10.png';
    imagesWoman.Neck =             'static/images/size/w11.png';
    imagesWoman.Winch =            'static/images/size/w12.png';
    imagesWoman.Knee =             'static/images/size/w13.png';
    imagesWoman.Caviar =           'static/images/size/w14.png';
    imagesWoman.Shin =             'static/images/size/w15.png';
    imagesWoman.Foot =             'static/images/size/foot.png';
    imagesWoman.FrontLength =      'static/images/size/w17.png';
    imagesWoman.LengthBack =       'static/images/size/w18.png';
    imagesWoman.Zsize =            'static/images/size/w19.png';
    imagesWoman.FrontLengthWaist = 'static/images/size/w20.png';
    imagesWoman.BackWaistLength =  'static/images/size/w21.png';
    imagesWoman.Shoulder =         'static/images/size/w22.png';
    imagesWoman.ElbowLength =      'static/images/size/w23.png';
    imagesWoman.Sleeve =           'static/images/size/w24.png';
    imagesWoman.ElbowLengthBack =  'static/images/size/w25.png';
    imagesWoman.Shoulders =        'static/images/size/w26.png';
    imagesWoman.Feet =             'static/images/size/w27.png';
    imagesWoman.LegsKnee =         'static/images/size/w28.png';
    imagesWoman.Shoes =            'static/images/size/size.png';
    imagesWoman.Growth =           'static/images/size/w30.png';
    imagesWoman.Weight =           'static/images/size/w31.png';

  // Title
  var titles = {};
    titles.Defalut =          'Измерения';
    titles.Breast =           'Грудь';
    titles.HalfChest =        'Половина груди';
    titles.ExtraBreasts =     'Экстра грудь';
    titles.ExtraBefore =      'Экстра перед';
    titles.Waist =            'Талия';
    titles.ExtraWaist =       'Экстра талия';
    titles.Hips =             'Бёдра';
    titles.Hip =              'Бедро';
    titles.Biceps =           'Бицепс';
    titles.Elbow =            'Локоть';
    titles.Wrist =            'Запястье';
    titles.Palm =             'Ладонь';
    titles.Crown =            'Окат';
    titles.Neck =             'Шея';
    titles.Winch =            'Ворот';
    titles.Knee =             'Колено';
    titles.Caviar =           'Икра';
    titles.Shin =             'Голень';
    titles.Foot =             'Ступня';
    titles.FrontLength =      'Длина по переду';
    titles.LengthBack =       'Длина по спине';
    titles.Zsize =            'Z размер';
    titles.FrontLengthWaist = 'Длина по переду до талии';
    titles.BackWaistLength =  'Длина по спине до талии';
    titles.Shoulder =         'Плечо';
    titles.ElbowLength =      'Длина до локтя';
    titles.Sleeve =           'Рукав';
    titles.ElbowLengthBack =  'Длина до локтя по спине';
    titles.Shoulders =        'Плечи';
    titles.Feet =             'Ноги';
    titles.LegsKnee =         'Ноги до колена';
    titles.Shoes =            'Обувь';
    titles.Growth =           'Рост';
    titles.Weight =           'Вес';

  // Text
  var text = {};
    text.Defalut =          'Давайте начнем. Возьмите измерительную ленту и используйте её с умом.';
    text.Breast =           'Сделайте неглубокий вдох. Измерьте окружность груди по уровню сосков.';
    text.HalfChest =        'Измерьте расстояние от одной подмышки до другой по уровню сосков.';
    text.ExtraBreasts =     'Измерьте расстояние между сосками.';
    text.ExtraBefore =      'Измерьте расстояние от точки у основания шеи вниз до соска.';
    text.Waist =            'Измерьте окружность талии по уровню пупка.';
    text.ExtraWaist =       'Измерьте окружность талии по самому тонкому месту.';
    text.Hips =             'Измерьте окружность бёдер по самому широкому месту ягодиц.';
    text.Hip =              'Измерьте окружность  бедра по самой широкой части.';
    text.Biceps =           'Согните руку под 90 градусов, напрягите бицепс, измерьте окружность бицепса.';
    text.Elbow =            'Согните руку под 90 градусов, положите измерительную ленту на сгиб локтя, измерьте окружность локтя через локтевую кость.';
    text.Wrist =            'Измерьте окружность запястья по уровню косточки.';
    text.Palm =             'Измерьте окружность ладони вместе с большим пальцем по самой широкой части.';
    text.Crown =            'Приложите начало измерительной ленты (отметка 0) к середине плеча, оберните измерительную ленту через подмышку. Измерение проводить с опущенной рукой.';
    text.Neck =             'Измерьте окружность шеи у основания.';
    text.Winch =            'Измерьте расстояние от ямки у основания шеи вверх до желаемой высоты воротника. Воротник может быть низкий, тогда этот размер «0».';
    text.Knee =             'Измерительную ленту приложите на подколенную ямку и согнув колено до 90 градусов измерьте окружность колена через коленную чашечку.';
    text.Caviar =           'Измерьте окружность икры в самой широкой части.';
    text.Shin =             'Измерьте окружность голени по уровню косточки.';
    text.Foot =             'Измерьте подъем стопы по косой через пятку.';
    text.FrontLength =      'Наденьте джинсы. Стойте прямо. Измерьте расстояние от промежности (место где сходятся швы у брюк) вверх до ямки у основания шеи.';
    text.LengthBack =       'Наденьте джинсы. Стойте прямо. Измерьте расстояние от промежности (место где сходятся швы у брюк) вверх по 7 шейного позвонка.';
    text.Zsize =            'Измерьте расстояние от ямки на шее до 7 шейного позвонка через промежность. Стойте ровно не сутулясь, измерительная лента не должна провисать. Это проверочный размер, сумма двух предшествующих измерений должна сойтись (допустимое расхождение не более 2см).';
    text.FrontLengthWaist = 'Наденьте джинсы. Завяжите на талии любую узкую ленту. Измерьте расстояние от промежности вверх до ленты на талии по переду.';
    text.BackWaistLength =  'Наденьте джинсы. Завяжите на талии любую узкую ленту. Измерьте расстояние от промежности вверх до ленты на талии по спине.';
    text.Shoulder =         'Измерьте расстояние от точки у основания шеи до точки начала руки.';
    text.ElbowLength =      'Измерьте расстояние от точки начала руки до локтевой косточки.';
    text.Sleeve =           'Опустите руку вниз, слегка согните локоть (не более 10 градусов), измерьте расстояние от точки начала руки до косточки на запястье через выступающую локтевую кость.';
    text.ElbowLengthBack =  'Согните руку на 90 градусов, измерьте расстояние от середины спины до косточки на локте по верхней границе лопаток.';
    text.Shoulders =        'Измерьте расстояние от одного плечевого сустава до другого по верхней границе лопаток.';
    text.Feet =             'Наденьте джинсы. Стоя в обуви, измерьте расстояние от паха (место где сходятся швы у брюк) вниз до пола по внутренней стороне ноги.';
    text.LegsKnee =         'Наденьте джинсы. Измерьте расстояние от паха (место где сходятся швы у брюк) вниз до середины коленной чашечки.';
    text.Shoes =            'Измерьте прыжковую обувь по кругу.';
    text.Growth =           'Ваш примерный рост в обуви.';
    text.Weight =           'Ваш примерный вес.';
  

  $('body').on('click', '#Man .bay-wrapper-item_content-size-zamer li div', function(){
    var elementId = this.id ;
    $('.bay-wrapper-item_content-size-zamer li div').removeClass('active');
    $(this).addClass('active');
    $(this).children('input').focus();
    $('#image').attr('src', imagesMan[elementId]);
    $('#title').text(titles[elementId]);
    $('#text').text(text[elementId]);
  });

  $('body').on('click', '#Woman .bay-wrapper-item_content-size-zamer li div', function(){
    var elementId = this.id ;
    $('.bay-wrapper-item_content-size-zamer li div').removeClass('active');
    $(this).addClass('active');
    $(this).children('input').focus();
    $('#image').attr('src', imagesWoman[elementId]);
    $('#title').text(titles[elementId]);
    $('#text').text(text[elementId]);
  });

  // Man
  $('body').on('click', '#ManLink', function(){
    $('#WomanLink').removeClass('active');
    $('.bay-wrapper-item_content-size-zamer li div').removeClass('active');
    $(this).addClass('active');
    $('.bay-wrapper-item_content-size').removeAttr('id', 'Woman').attr('id', 'Man');
    $('#image').attr('src', 'static/images/size/m0.png');
    $('#title').text('Измерения');
    $('#text').text('Давайте начнем. Возьмите измерительную ленту и используйте её с умом.');
  });

  // Woman
  $('body').on('click', '#WomanLink', function(){
    $('#ManLink').removeClass('active');
    $('.bay-wrapper-item_content-size-zamer li div').removeClass('active');
    $(this).addClass('active');
    $('.bay-wrapper-item_content-size').removeAttr('id', 'Man').attr('id', 'Woman');
    $('#image').attr('src', 'static/images/size/w0.png');
    $('#title').text('Измерения');
    $('#text').text('Давайте начнем. Возьмите измерительную ленту и используйте её с умом.');
  });

});
