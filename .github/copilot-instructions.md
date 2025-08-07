# Copilot Instructions - Verstka1 Project

## Архитектура проекта

Это HTML/CSS/SCSS проект с модульной системой сборки секций. Проект НЕ использует фреймворки типа Tailwind CSS - только чистые HTML/CSS/SCSS.

## Структура проекта

```
src/
├── html/
│   ├── index.html              # Основной HTML файл
│   └── sections/               # HTML секции
│       ├── header.html
│       ├── hero.html
│       ├── footer.html
│       └── ...
├── scss/
│   ├── main.scss               # Главный SCSS файл
│   ├── _variables.scss         # Переменные
│   ├── _base.scss              # Базовые стили
│   ├── sections/               # Стили секций
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   └── ...
│   └── components/             # Компоненты (если нужны)
└── js/
    └── main.js                 # JavaScript

dist/                           # Собранный проект
assets/                         # Статические файлы
scripts/
└── build-html.js              # Скрипт сборки HTML
```

## Система сборки

### NPM Scripts:

- `npm run dev` - запуск dev сервера с автообновлением
- `npm run build` - полная сборка проекта
- `npm run build:html` - сборка HTML с включением секций
- `npm run build:scss` - компиляция SCSS в CSS
- `npm run watch:scss` - отслеживание изменений SCSS

### Модульная система HTML:

В основном файле `src/html/index.html` используются директивы включения:

```html
<!-- INCLUDE:header -->
<!-- INCLUDE:hero -->
<!-- INCLUDE:footer -->
```

Скрипт `scripts/build-html.js` автоматически подставляет содержимое файлов из `src/html/sections/`.

## CSS/SCSS Guidelines

### Переменные в `_variables.scss`:

```scss
$action: #b20000; // Красный акцентный цвет
$title: #222325; // Темный цвет заголовков
$text: #383e47; // Цвет основного текста
$bg: #f7f7f7; // Фоновый цвет

$font-rajdhani: "Rajdhani", sans-serif;
$font-inter: "Inter", sans-serif;

$mobile: 768px;
$tablet: 1024px;
$desktop: 1440px;
```

### БЭМ методология:

Используется БЭМ для именования классов:

```scss
.header {
	&__container {
	}
	&__logo {
	}
	&__nav {
	}
	&__cta-btn {
	}
}
```

### Responsive дизайн:

```scss
@media (max-width: $mobile) {
}
@media (max-width: $tablet) {
}
```

## Рабочий процесс

### Добавление новой секции:

1. Создать `src/html/sections/section-name.html`
2. Создать `src/scss/sections/_section-name.scss`
3. Добавить импорт в `src/scss/main.scss`: `@import 'sections/section-name';`
4. Добавить в `src/html/index.html`: `<!-- INCLUDE:section-name -->`
5. Запустить `npm run build` или использовать `npm run dev` для автосборки

### Стили компонентов:

Для переиспользуемых компонентов создавать файлы в `src/scss/components/`.

### JavaScript:

Весь кастомный JS находится в `src/js/main.js`. Внешние библиотеки подключаются через CDN.

## Важные принципы

1. **Без фреймворков** - не использовать Tailwind, Bootstrap и подобные CSS фреймворки
2. **Модульность** - каждая секция в отдельном файле
3. **БЭМ** - строгое следование БЭМ методологии
4. **SCSS** - использование переменных, миксинов, вложенности
5. **Responsive** - мобильная адаптивность обязательна
6. **Сборка** - всегда использовать систему сборки, не редактировать файлы в `dist/`

## Внешние библиотеки

- **Swiper** - для слайдеров
- **Fancybox** - для модальных окон и галерей
- **Google Fonts** - Rajdhani (заголовки), Inter (основной текст)

## Dev Server

Dev сервер запускается на `http://localhost:3000` (или другом доступном порту) с автообновлением при изменении файлов.
