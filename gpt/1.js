// Напиши скрипт телеграм бота на node.js с использованием библиотеки node-telegram-bot-api для начинающего js-разработчика. Бот должен уметь перемещать пирата по карте размером 100x100 для поиска сокровищ.
// ===========

// Создание телеграм-бота для перемещения пирата по карте размером 100x100 в поисках сокровищ будет интересным проектом. Для этого вам понадобится использовать библиотеку node-telegram-bot-api в Node.js. Я приведу базовый скрипт, который поможет вам начать.
// Шаги для создания бота:
// Установка Библиотеки: Установите node-telegram-bot-api через NPM.

// npm install node-telegram-bot-api

// Создание Бота в Телеграме: Создайте бота в Telegram через BotFather и получите токен.
// Инициализация Бота: Используйте полученный токен для инициализации бота в вашем скрипте.
// Кодирование Логики Игры: Реализуйте логику перемещения пирата и поиска сокровищ.
// Примерный скрипт бота:

const TelegramBot = require('node-telegram-bot-api');
const token = 'ВАШ_ТОКЕН_БОТА'; // Замените на ваш токен
const bot = new TelegramBot(token, { polling: true });

// Инициализация карты и позиции пирата
const mapSize = 100;
let piratePosition = { x: 0, y: 0 };

// Обработка команды "/start"
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!");
  piratePosition = { x: 50, y: 50 }; // Стартовая позиция пирата
});

// Обработка команд перемещения
bot.onText(/\/move (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const direction = match[1];

  // Перемещение пирата
  switch (direction) {
    case 'вверх':
      piratePosition.y = Math.max(0, piratePosition.y - 1);
      break;
    case 'вниз':
      piratePosition.y = Math.min(mapSize - 1, piratePosition.y + 1);
      break;
    case 'влево':
      piratePosition.x = Math.max(0, piratePosition.x - 1);
      break;
    case 'вправо':
      piratePosition.x = Math.min(mapSize - 1, piratePosition.x + 1);
      break;
    default:
      bot.sendMessage(chatId, "Я не знаю такого направления!");
      return;
  }

  bot.sendMessage(chatId, `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`);
});

// Запуск бота
bot.on('polling_error', (error) => console.log(error));

// Как использовать этот скрипт:
// Замените 'ВАШ_ТОКЕН_БОТА' на реальный токен, полученный от BotFather.
// Запустите скрипт на сервере или локальной машине.
// Взаимодействуйте с ботом в Telegram, используя команды вроде /move вверх.
// Этот код - простой пример, который можно расширить, добавив сложности в игру, например, генерацию случайных сокровищ на карте или врагов. Также рекомендую изучить документацию node-telegram-bot-api для более глубокого понимания возможностей библиотеки.
