// Добавь в ответы от бота кнопки для перемещения и редактирование одного и того же сообщения вместо отправки нового сообщения каждый раз.

// Добавление кнопок для перемещения и редактирование одного и того же сообщения повысит удобство использования вашего телеграм-бота. Для этого мы будем использовать inline-кнопки и метод editMessageText из node-telegram-bot-api. Вот обновленный скрипт:
// Обновленный скрипт бота:

const TelegramBot = require('node-telegram-bot-api');
const token = 'ВАШ_ТОКЕН_БОТА'; // Замените на ваш токен
const bot = new TelegramBot(token, { polling: true });

const mapSize = 100;
let piratePosition = { x: 50, y: 50 };
let enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
let treasure = { x: randomCoordinate(), y: randomCoordinate() };

function randomCoordinate() {
  return Math.floor(Math.random() * mapSize);
}

// Клавиатура для перемещения
const moveKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Вверх', callback_data: 'вверх' }],
      [{ text: 'Влево', callback_data: 'влево' }, { text: 'Вправо', callback_data: 'вправо' }],
      [{ text: 'Вниз', callback_data: 'вниз' }]
    ]
  }
};

bot.onText(/\/start/, (msg) => {
  piratePosition = { x: 50, y: 50 };
  enemies = [{ x: randomCoordinate(), y: randomCoordinate() }];
  treasure = { x: randomCoordinate(), y: randomCoordinate() };
  bot.sendMessage(msg.chat.id, "Привет, пират! Начнем поиски сокровищ!", moveKeyboard);
});

// Обработка нажатий на кнопки
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  movePirate(data);

  let responseText = `Пират переместился на [${piratePosition.x}, ${piratePosition.y}]`;

  if (piratePosition.x === treasure.x && piratePosition.y === treasure.y) {
    responseText = "Поздравляю! Ты нашел сокровище!";
    treasure = { x: randomCoordinate(), y: randomCoordinate() };
  } else if (enemies.some(enemy => enemy.x === piratePosition.x && enemy.y === piratePosition.y)) {
    responseText = "О нет! Ты встретил врага!";
  }

  bot.editMessageText(responseText, {
    chat_id: message.chat.id,
    message_id: message.message_id,
    reply_markup: moveKeyboard.reply_markup
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

// Описание изменений:
// Inline-кнопки: Кнопки для перемещения пирата теперь представлены в виде inline-кнопок. Это позволяет пользователю управлять перемещением, не вводя текстовые команды.
// Обработка Callback Queries: Когда пользователь нажимает на кнопку, бот получает callback_query, который обрабатывается для перемещения пирата и обновления сообщения.
// Редактирование Сообщения: Вместо отправки нового сообщения после каждого хода, бот редактирует существующее сообщение с помощью editMessageText. Это предотвращает накопление большого количества сообщений в чате.
// Эти изменения делают интерфейс бота более интерактивным и удобным для пользователя. Вы можете дополнительно настроить внешний вид и расположение кнопок в соответствии с вашими предпочтениями.
