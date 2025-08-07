const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🔥 JS Watcher started - watching src/js/**/*.js');

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
        if (filename && filename.endsWith('.js')) {
            console.log(`📝 JS file changed: ${filename}`);
            callback();
        }
    });
}

// Отслеживание изменений JS файлов
const jsDir = path.join(__dirname, '../src/js');
watchDirectory(jsDir, async () => {
    try {
        await runCommand('npm run build:js');
        console.log('✅ JS rebuilt successfully');
    } catch (error) {
        console.error('❌ JS build failed');
    }
});

// Не завершать процесс
process.stdin.resume();
