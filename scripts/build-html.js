const fs = require('fs');
const path = require('path');

// Создаем папку dist если её нет
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Читаем основной HTML файл
const htmlPath = path.join('src', 'html', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Функция для включения секций
function includeSection(content, sectionName) {
    const includePattern = new RegExp(`<!-- INCLUDE:${sectionName} -->`, 'g');
    const sectionPath = path.join('src', 'html', 'sections', `${sectionName}.html`);

    if (fs.existsSync(sectionPath)) {
        const sectionContent = fs.readFileSync(sectionPath, 'utf8');
        return content.replace(includePattern, sectionContent);
    } else {
        console.warn(`Warning: Section file ${sectionPath} not found`);
        return content.replace(includePattern, `<!-- Section ${sectionName} not found -->`);
    }
}

// Находим все INCLUDE директивы
const includeMatches = htmlContent.match(/<!-- INCLUDE:(\w+) -->/g);

if (includeMatches) {
    includeMatches.forEach(match => {
        const sectionName = match.match(/<!-- INCLUDE:(\w+) -->/)[1];
        htmlContent = includeSection(htmlContent, sectionName);
    });
}

// Записываем результат в dist
const outputPath = path.join('dist', 'index.html');
fs.writeFileSync(outputPath, htmlContent);

console.log('HTML build completed successfully!');
console.log(`Output: ${outputPath}`);
