# Adas Depot - HTML/CSS/SCSS Project

Проект с обычной инфраструктурой HTML/CSS/SCSS и системой сборки.

## 🚀 Структура проекта

```
verstka1/
├── src/                     # Исходные файлы
│   ├── html/               # HTML файлы
│   │   ├── index.html      # Основной HTML файл
│   │   └── sections/       # HTML секции
│   │       ├── header.html
│   │       ├── hero.html
│   │       └── footer.html
│   ├── scss/               # SCSS файлы
│   │   ├── main.scss       # Главный SCSS файл
│   │   ├── _variables.scss # Переменные
│   │   ├── _base.scss      # Базовые стили
│   │   ├── sections/       # Стили секций
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   └── _footer.scss
│   │   └── components/     # Стили компонентов
│   └── js/                 # JavaScript файлы
│       └── main.js
├── assets/                 # Статические ресурсы
│   └── img/
├── dist/                   # Собранный проект (создается автоматически)
├── scripts/                # Скрипты сборки
│   └── build-html.js
└── package.json
```

## 🛠 Команды

### Установка зависимостей

```bash
npm install
```

### Разработка (автоматическая пересборка SCSS + локальный сервер)

```bash
npm run dev
```

Откроется браузер на `http://localhost:3000` с автоматическим обновлением.

### Сборка проекта

```bash
npm run build
```

Создает папку `dist` с готовым проектом.

### Отдельные команды

- `npm run build:scss` - компиляция SCSS в CSS
- `npm run build:html` - сборка HTML с включением секций
- `npm run build:js` - копирование JS файлов
- `npm run copy:assets` - копирование ресурсов
- `npm run clean` - очистка папки dist

## 📝 Как работать с проектом

### 1. Добавление новых HTML секций

1. Создайте файл в `src/html/sections/new-section.html`
2. Добавьте в основной HTML: `<!-- INCLUDE:new-section -->`
3. Создайте SCSS файл `src/scss/sections/_new-section.scss`
4. Импортируйте в `src/scss/main.scss`: `@import 'sections/new-section';`

### 2. Работа с переменными

Все переменные находятся в `src/scss/_variables.scss`:

- Цвета: `$action`, `$title`, `$text`, `$bg`
- Шрифты: `$font-rajdhani`, `$font-inter`
- Брейкпоинты: `$mobile`, `$tablet`, `$desktop`

### 3. Примеры использования

#### HTML секция (`src/html/sections/example.html`):

```html
<section class="example">
	<div class="container">
		<h2 class="example__title">Заголовок</h2>
		<p class="example__text">Текст секции</p>
	</div>
</section>
```

#### SCSS стили (`src/scss/sections/_example.scss`):

```scss
.example {
	padding: 80px 0;

	&__title {
		font-family: $font-rajdhani;
		font-size: 36px;
		color: $title;
		margin-bottom: 20px;

		@media (max-width: $mobile) {
			font-size: 28px;
		}
	}

	&__text {
		font-size: 16px;
		color: $text;
	}
}
```

### 4. Готовые утилиты

#### CSS классы:

- `.container` - контейнер с максимальной шириной
- `.text-center`, `.text-left`, `.text-right` - выравнивание текста
- `.font-rajdhani`, `.font-inter` - шрифты
- `.text-action`, `.text-title`, `.text-text`, `.text-white` - цвета текста
- `.bg-action`, `.bg-title`, `.bg-bg`, `.bg-white` - цвета фона
- `.fade-in`, `.slide-up` - анимации

#### SCSS миксины:

- `@include fade-in` - анимация появления
- `@include slide-up` - анимация движения вверх
- `@include hover-transition` - плавный переход при hover

## 🎨 Дизайн система

### Цвета

- **Action**: `#B20000` - основной акцентный цвет
- **Title**: `#222325` - цвет заголовков
- **Text**: `#383E47` - цвет основного текста
- **Background**: `#F7F7F7` - цвет фона

### Типографика

- **Rajdhani**: для заголовков и кнопок (font-weight: 700)
- **Inter**: для основного текста (font-weight: 400, 500, 700)

### Брейкпоинты

- **Mobile**: до 768px
- **Tablet**: до 1024px
- **Desktop**: от 1024px (максимум 1440px)

## 📦 Зависимости

- **sass**: компилятор SCSS
- **live-server**: локальный сервер для разработки
- **npm-run-all**: для параллельного запуска команд

## 🚀 Деплой

После сборки проекта (`npm run build`) папку `dist` можно загрузить на любой хостинг или CDN.
