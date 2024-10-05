// app.js
const slider = document.querySelector('.category-slider');
let scrollAmount = 0;

function autoScroll() {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    } else {
        scrollAmount += 2;  // Скорость прокрутки
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Автоматическая прокрутка слайдера
setInterval(autoScroll, 30);  // Интервал для плавной прокрутки
