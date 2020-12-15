$('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./image/content/Arrow-prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./image/content/Arrow-next.svg" alt="bext"></button>',
    autoplay: true,//пролистывание по умолчнию 3 сек
    fade: true,// эффект возникновения слайда вместо перелистывания
  
});
//=======выпадающие списки в футере==========================
const widgets = document.querySelectorAll('.widget');

//находим все виджеты на странице
widgets.forEach(function (widget) {

    //слушаем клик внутри виджета
    widget.addEventListener('click', function (e) {

        //если клик по заголовку - тогда скрываем/показываем тело виджета добавляя классы
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});
