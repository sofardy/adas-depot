// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    console.log('Adas Depot website loaded');

    // Mobile menu toggle (если будет нужно)
    const mobileMenuToggle = () => {
        // Логика для мобильного меню
    };

    // Smooth scrolling для якорных ссылок
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Инициализация функций
    smoothScroll();

    // Инициализация Swiper (если нужно)
    // const swiper = new Swiper('.swiper', {
    //   // конфигурация
    // });

    // Инициализация Fancybox (если нужно)
    // Fancybox.bind('[data-fancybox]', {
    //   // конфигурация
    // });
});
