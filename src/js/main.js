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

    // Табы для packages секции
    const initPackagesTabs = () => {
        const tabs = document.querySelectorAll('.packages__tab');
        const items = document.querySelectorAll('.packages__item');

        if (!tabs.length || !items.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const targetTab = this.dataset.tab;

                // Убираем активный класс со всех табов
                tabs.forEach(t => t.classList.remove('packages__tab--active'));

                // Добавляем активный класс к текущему табу
                this.classList.add('packages__tab--active');

                // Скрываем все блоки
                items.forEach(item => {
                    item.style.display = 'none';
                });

                // Показываем нужный блок
                const targetItem = document.getElementById(targetTab);
                if (targetItem) {
                    targetItem.style.display = 'block';
                }
            });
        });

        // Инициализация: показать только первый блок на мобильных
        const initMobileTabs = () => {
            if (window.innerWidth <= 768) {
                items.forEach((item, index) => {
                    if (index === 0) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            } else {
                // На десктопе показываем все блоки
                items.forEach(item => {
                    item.style.display = 'block';
                });
            }
        };

        // Инициализация при загрузке
        initMobileTabs();

        // Переинициализация при изменении размера окна
        window.addEventListener('resize', initMobileTabs);
    };

    // Инициализация Swiper для testimonials
    const initTestimonialsSwiper = () => {
        const testimonialsSwiper = document.querySelector('.testimonialblock__swiper');

        if (testimonialsSwiper) {
            new Swiper('.testimonialblock__swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoHeight: false, // фиксированная высота
                autoplay: {
                    delay: 60000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.testimonialblock__pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 50,
                    }
                }
            });
        }
    };

    // Инициализация функций
    smoothScroll();
    initPackagesTabs();
    initTestimonialsSwiper();

    // Инициализация Swiper (если нужно)
    // const swiper = new Swiper('.swiper', {
    //   // конфигурация
    // });

    // Инициализация Fancybox (если нужно)
    // Fancybox.bind('[data-fancybox]', {
    //   // конфигурация
    // });
});
