$(document).ready(function() {
    $(document).on('wheel', function (e) {
        var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
        var scrollAmount = delta * 0.1;
    
        var currentScrollLeft = $(window).scrollLeft();
        var documentWidth = $(document).width();
        var windowWidth = $(window).width();
    
        var newScrollLeft = currentScrollLeft - scrollAmount;
    
        // Проверяем, достигли ли конца документа вправо
        var isEndOfDocumentRight = newScrollLeft >= documentWidth - windowWidth;
    
        if (newScrollLeft < 0 || isEndOfDocumentRight) {
            // Если достигли конца вправо или ушли за левый край, устанавливаем новую позицию прокрутки
            newScrollLeft = isEndOfDocumentRight ? documentWidth - windowWidth : 0;
            $(window).scrollLeft(newScrollLeft);
    
            // Останавливаем дальнейшую прокрутку
            e.preventDefault();
        } else {
            // Прокручиваем вправо
            $(window).scrollLeft(newScrollLeft);
        }

    
        return false;
    });
    
    // Добавим медиа-запросы для определения стилей в зависимости от размеров экрана
    if (window.matchMedia("(max-width: 767px)").matches) {
        // Стили для устройств с шириной экрана до 767px
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
        // Стили для устройств с шириной экрана от 768px до 991px
    } else {
        // Стили для устройств с шириной экрана 992px и больше
    }
    
    
    
    var progressBar = $('.progress-bar');

    $(document).on('wheel', function(e) {
      e.preventDefault();

      var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
      var scrollAmount = delta * 1;

      var currentScrollLeft = $(window).scrollLeft();
      var documentWidth = $(document).width();
      var windowWidth = $(window).width();

      var newScrollLeft = currentScrollLeft - scrollAmount;

      if (newScrollLeft < 0) {
        $('html, body').animate({ scrollLeft: documentWidth }, 1000, 'easeInOutCubic', function() {
          $(window).scrollLeft(0);
        });
      } else if (newScrollLeft > documentWidth - windowWidth) {
        $('html, body').animate({ scrollLeft: 0 }, 1000, 'easeInOutCubic', function() {
          $(window).scrollLeft(documentWidth);
        });
      } else {
        $('html, body').animate({ scrollLeft: newScrollLeft }, 1000, 'easeInOutCubic');
      }

      updateProgressBar();
      return false;
    });

    function updateProgressBar() {
      var scrollPosition = $(document).scrollLeft();
      var documentWidth = $(document).width();
      var windowWidth = $(window).width();
      var progress = (scrollPosition / (documentWidth - windowWidth)) * 100;
      progressBar.width(progress + '%');
    }

    $(window).on('scroll', function() {
      updateProgressBar();
    });
});


