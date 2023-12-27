const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const bot = require('../bot');

const mapSize = 100;
let piratePosition = { x: 0, y: 0 };

// Обработка команды "/start"
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Привет, пират! Начнем поиски сокровищ!');
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
      bot.sendMessage(chatId, 'Я не знаю такого направления!');
      return;
  }

  bot.sendMessage(
    chatId,
    `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`
  );
});

// Запуск бота
bot.on('polling_error', (error) => console.log(error));
