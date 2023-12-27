const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const bot = require('../bot');

const mapSize = 100;
let piratePosition = { x: 50, y: 50 };
let enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
let test_treasure = { x: 51, y: 51 };

function randomCoordinate() {
  return Math.floor(Math.random() * mapSize);
}

// Клавиатура для перемещения
const moveKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Вверх', callback_data: 'вверх' }],
      [
        { text: 'Влево', callback_data: 'влево' },
        { text: 'Вправо', callback_data: 'вправо' },
      ],
      [{ text: 'Вниз', callback_data: 'вниз' }],
      [{ text: 'Копать', callback_data: 'копать' }],
    ],
  },
};

bot.onText(/\/start/, (msg) => {
  piratePosition = { x: 50, y: 50 };
  enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
  test_treasure = { x: 51, y: 51 };
  bot.sendMessage(
    msg.chat.id,
    'Привет, пират! Начнем поиски сокровищ!',
    moveKeyboard
  );
});

// Обработка нажатий на кнопки
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  movePirate(data);

  let responseText = `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`;
  // Добавил флаг найденного сокровища
  let found_treasure = false;

  if (
    piratePosition.x === test_treasure.x &&
    piratePosition.y === test_treasure.y
  ) {
    responseText = 'Поздравляю! Ты нашел сокровище!';
    test_treasure = { x: 51, y: 51 };
    // Если условие поиска сокровища выполняется меняем флаг на true
    found_treasure = true;
  } else if (
    enemies.some(
      (enemy) => enemy.x === piratePosition.x && enemy.y === piratePosition.y
    )
  ) {
    responseText = 'О нет! Ты встретил врага!';
  }

  // В случае, если юзер нажал кнопку копать, выводим сообщение в зависимости от булевого значения нашего флага
  if (data === 'копать') {
    if (found_treasure) {
      responseText = 'Нашёл!';
    } else {
      responseText = 'Не нашёл.';
    }
  }

  bot.editMessageText(responseText, {
    chat_id: message.chat.id,
    message_id: message.message_id,
    reply_markup: moveKeyboard.reply_markup,
  });
});

function movePirate(direction) {
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
  }
}

bot.on('polling_error', (error) => console.log(error));
