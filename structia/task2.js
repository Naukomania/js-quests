const { getCoins, getCoords, getShipNumber } = require('./lib.js');

const user = {
  name: 'Structia',
  image: 'structia.png',
  corsair: false,
  legend:
    'Открывает новые горизонты. Не упустит возможность поспать в пивном трюме. \
Одноглазый. Заботится о собственном домашнем питоне',
  friends: ['HellsingLan', 'Maria', 'Cap'],
  coins: getCoins(3),
  ship: getShipNumber(16, 6),
  location: getCoords(),
  github: 'mksmvnv',
};

console.log(JSON.stringify(user, null, 2));
