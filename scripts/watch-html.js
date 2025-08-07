const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🔥 HTML Watcher started - watching src/html/**/*.html');

// Функция для выполнения команды
function runCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ Error: ${error}`);
                reject(error);
                return;
            }
            if (stdout) console.log(stdout);
            if (stderr) console.error(stderr);
            resolve();
        });
    });
}

// Функция для отслеживания изменений
function watchDirectory(dir, callback) {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename && filename.endsWith('.html')) {
            console.log(`📝 HTML file changed: ${filename}`);
            callback();
        }
    });
}

// Отслеживание изменений HTML файлов
const htmlDir = path.join(__dirname, '../src/html');
watchDirectory(htmlDir, async () => {
    try {
        await runCommand('npm run build:html');
        console.log('✅ HTML rebuilt successfully');
    } catch (error) {
        console.error('❌ HTML build failed');
    }
});

// Не завершать процесс
process.stdin.resume();
