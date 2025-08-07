// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    console.log('Adas Depot website loaded');

    // Mobile menu toggle
    const mobileMenuToggle = () => {
        const burger = document.querySelector('.header__burger');
        const mobileMenu = document.querySelector('.header__mobile-menu');
        const mobileClose = document.querySelector('.header__mobile-close');
        const overlay = document.querySelector('.header__overlay');

        if (!burger || !mobileMenu) return;

        const openMenu = () => {
            mobileMenu.classList.add('header__mobile-menu--active');
            overlay.classList.add('header__overlay--active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('header__mobile-menu--active');
            overlay.classList.remove('header__overlay--active');
            document.body.style.overflow = '';
        };

        burger.addEventListener('click', openMenu);
        mobileClose?.addEventListener('click', closeMenu);
        overlay?.addEventListener('click', closeMenu);

        // Закрытие при клике на ссылки меню
        const mobileLinks = document.querySelectorAll('.header__mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
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
                slidesPerView: 1.2,
                spaceBetween: 30,
                loop: true,
                autoHeight: true,
                grabCursor: true,
                simulateTouch: true,
                touchReleaseOnEdges: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.testimonialblock__pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    }
                }
            });
        }
    };

    // FAQ аккордеон
    const initFAQ = () => {
        const faqItems = document.querySelectorAll('.faq__item');

        if (!faqItems.length) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');
            const icon = item.querySelector('.faq__question img');

            if (!question || !answer) return;

            // Изначально скрываем все ответы
            answer.style.maxHeight = '0';
            answer.style.opacity = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';

            question.addEventListener('click', function () {
                const isOpen = item.classList.contains('faq__item--active');

                // Закрываем все остальные элементы
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('faq__item--active');
                        const otherAnswer = otherItem.querySelector('.faq__answer');
                        const otherIcon = otherItem.querySelector('.faq__question img');

                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                            otherAnswer.style.opacity = '0';
                        }

                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                            otherIcon.style.transition = 'transform 0.4s ease';
                        }
                    }
                });

                // Переключаем текущий элемент
                if (isOpen) {
                    // Закрываем
                    item.classList.remove('faq__item--active');
                    answer.style.maxHeight = '0';
                    answer.style.opacity = '0';

                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                        icon.style.transition = 'transform 0.4s ease';
                    }
                } else {
                    // Открываем
                    item.classList.add('faq__item--active');

                    // Вычисляем высоту контента
                    const scrollHeight = answer.scrollHeight;
                    answer.style.maxHeight = scrollHeight + 'px';
                    answer.style.opacity = '1';

                    if (icon) {
                        icon.style.transform = 'rotate(45deg)';
                        icon.style.transition = 'transform 0.4s ease';
                    }
                }
            });
        });
    };

    // Инициализация функций
    smoothScroll();
    initPackagesTabs();
    initTestimonialsSwiper();
    initFAQ();
    mobileMenuToggle();

});

