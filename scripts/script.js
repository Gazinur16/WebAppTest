const TelegramBot = require('node-telegram-bot-api');

// Ваш токен бота
const token = '6834164465:AAEokQ3sNvwTYG8fewiqUp11_vVOZECUDBg';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Получаем информацию о пользователе
    bot.getUserProfilePhotos(chatId).then((photos) => {
        if (photos.total_count > 0) {
            // Получаем первую фотографию пользователя
            const fileId = photos.photos[0][0].file_id;

            // Получаем информацию о файле
            bot.getFile(fileId).then((file) => {
                const fileUrl = `https://api.telegram.org/file/bot${token}/${file.file_path}`;

                // Выводим аватарку пользователя на странице
                const userAvatar = document.getElementById('user-avatar');
                userAvatar.src = fileUrl;
            });
        }
    });
});
