const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});
const bot = require('../bot');

// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];

//   bot.sendMessage(chatId, resp);
// });

// bot.on('message', (msg) => {
//   console.log({ msg });
//   const chatId = msg.chat.id;
//   if (msg.text === 'Привет!') bot.sendMessage(chatId, 'Приветище, дорогой!');
//   else bot.sendMessage(chatId, 'Received your message');
// });

// 1

// const mapSize = 100;
// let piratePosition = { x: 0, y: 0 };

// // Обработка команды "/start"
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!");
//   piratePosition = { x: 50, y: 50 }; // Стартовая позиция пирата
// });

// // Обработка команд перемещения
// bot.onText(/\/move (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const direction = match[1];

//   // Перемещение пирата
//   switch (direction) {
//     case 'вверх':
//       piratePosition.y = Math.max(0, piratePosition.y - 1);
//       break;
//     case 'вниз':
//       piratePosition.y = Math.min(mapSize - 1, piratePosition.y + 1);
//       break;
//     case 'влево':
//       piratePosition.x = Math.max(0, piratePosition.x - 1);
//       break;
//     case 'вправо':
//       piratePosition.x = Math.min(mapSize - 1, piratePosition.x + 1);
//       break;
//     default:
//       bot.sendMessage(chatId, "Я не знаю такого направления!");
//       return;
//   }

//   bot.sendMessage(chatId, `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`);
// });

// // Запуск бота
// bot.on('polling_error', (error) => console.log(error));

// 2

const mapSize = 100;
let piratePosition = { x: 50, y: 50 };
let enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
let treasure = { x: randomCoordinate(), y: randomCoordinate() };

function randomCoordinate() {
  return Math.floor(Math.random() * mapSize);
}

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!");
  piratePosition = { x: 50, y: 50 }; // Стартовая позиция пирата
  enemies = [{ x: randomCoordinate(), y: randomCoordinate() }]; // Позиция врага
  treasure = { x: 51, y: 51 }; // Позиция сокровища
});

bot.onText(/\/move (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const direction = match[1];

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

  if (piratePosition.x === treasure.x && piratePosition.y === treasure.y) {
    bot.sendMessage(chatId, "Поздравляю! Ты нашел сокровище!");
    treasure = { x: randomCoordinate(), y: randomCoordinate() };
  } else if (enemies.some(enemy => enemy.x === piratePosition.x && enemy.y === piratePosition.y)) {
    bot.sendMessage(chatId, "О нет! Ты встретил врага!");
  } else {
    bot.sendMessage(chatId, `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`);
  }
});

bot.on('polling_error', (error) => console.log(error));

// 3

// const mapSize = 100;
// let piratePosition = { x: 50, y: 50 };
// let enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
// let treasure = { x: randomCoordinate(), y: randomCoordinate() };

// function randomCoordinate() {
//   return Math.floor(Math.random() * mapSize);
// }

// const moveKeyboard = {
//   reply_markup: {
//     inline_keyboard: [
//       [{ text: 'Вверх', callback_data: 'вверх' }],
//       [{ text: 'Влево', callback_data: 'влево' }, { text: 'Вправо', callback_data: 'вправо' }],
//       [{ text: 'Вниз', callback_data: 'вниз' }]
//     ]
//   }
// };

// bot.onText(/\/start/, (msg) => {
//   piratePosition = { x: 50, y: 50 };
//   enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
//   treasure = { x: randomCoordinate(), y: randomCoordinate() };
//   bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!", moveKeyboard);
// });

// bot.on('callback_query', (callbackQuery) => {
//   const message = callbackQuery.message;
//   const data = callbackQuery.data;

//   movePirate(data);

//   let responseText = `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`;

//   if (piratePosition.x === treasure.x && piratePosition.y === treasure.y) {
//     responseText = "Поздравляю! Ты нашел сокровище!";
//     treasure = { x: randomCoordinate(), y: randomCoordinate() };
//   } else if (enemies.some(enemy => enemy.x === piratePosition.x && enemy.y === piratePosition.y)) {
//     responseText = "О нет! Ты встретил врага!";
//   }

//   bot.editMessageText(responseText, {
//     chat_id: message.chat.id,
//     message_id: message.message_id,
//     reply_markup: moveKeyboard.reply_markup
//   });
// });

// function movePirate(direction) {
//   switch (direction) {
//     case 'вверх':
//       piratePosition.y = Math.max(0, piratePosition.y - 1);
//       break;
//     case 'вниз':
//       piratePosition.y = Math.min(mapSize - 1, piratePosition.y + 1);
//       break;
//     case 'влево':
//       piratePosition.x = Math.max(0, piratePosition.x - 1);
//       break;
//     case 'вправо':
//       piratePosition.x = Math.min(mapSize - 1, piratePosition.x + 1);
//       break;
//   }
// }
