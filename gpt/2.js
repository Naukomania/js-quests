// Добавь ещё на карту врагов и сокровища. Но сохрани простоту реализации.
// ===========

// Конечно, давайте добавим врагов и сокровища на карту. Для простоты реализации мы можем использовать простые условия и случайные координаты для врагов и сокровищ. Вот обновленная версия скрипта:
// Обновленный скрипт бота:

const TelegramBot = require('node-telegram-bot-api');
const token = 'ВАШ_ТОКЕН_БОТА'; // Замените на ваш токен
const bot = new TelegramBot(token, { polling: true });

// Инициализация карты, пирата, врагов и сокровищ
const mapSize = 100;
let piratePosition = { x: 50, y: 50 };
let enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
let treasure = { x: randomCoordinate(), y: randomCoordinate() };

// Функция для генерации случайных координат
function randomCoordinate() {
  return Math.floor(Math.random() * mapSize);
}

// Обработка команды "/start"
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!");
  piratePosition = { x: 50, y: 50 }; // Стартовая позиция пирата
  enemies = [{ x: randomCoordinate(), y: randomCoordinate() }]; // Позиция врага
  treasure = { x: randomCoordinate(), y: randomCoordinate() }; // Позиция сокровища
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

  // Проверка на столкновение с врагом или нахождение сокровища
  if (piratePosition.x === treasure.x && piratePosition.y === treasure.y) {
    bot.sendMessage(chatId, "Поздравляю! Ты нашел сокровище!");
    // Генерация нового сокровища
    treasure = { x: randomCoordinate(), y: randomCoordinate() };
  } else if (enemies.some(enemy => enemy.x === piratePosition.x && enemy.y === piratePosition.y)) {
    bot.sendMessage(chatId, "О нет! Ты встретил врага!");
  } else {
    bot.sendMessage(chatId, `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`);
  }
});

// Запуск бота
bot.on('polling_error', (error) => console.log(error));

// Описание изменений:
// Генерация Случайных Координат: Функция randomCoordinate() генерирует случайные координаты для врагов и сокровищ.
// Инициализация Врагов и Сокровищ: При запуске бота (команда /start) генерируются новые позиции для врагов и сокровищ.
// Логика Взаимодействия: После каждого хода пирата проверяется, не нашел ли он сокровище или не столкнулся ли с врагом.
// Этот скрипт добавляет базовую интерактивность и элемент случайности в игру, сохраняя при этом простоту реализации. Вы можете дополнительно усложнить игру, добавив больше врагов, разные типы сокровищ или специальные события.
