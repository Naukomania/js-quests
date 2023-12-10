const { getShipNumber, getCoins, getCoords } = require('./lib');

const user = {
  name: 'Cap',
  image: 'cap.png',
  corsair: false,
  legend:
    'Возможно, турок. Старый солдат, не знающий слов любви. Иногда придумывает пословицы и ругательства. Потом делает вид, что так говорят все уважаемые пираты.',
  friends: ['Henry StormBlade', 'HellsingLan', 'Bloomberg'],
  coins: getCoins(3),
  ship: getShipNumber(19, 3),
  location: getCoords(),
  github: 'naukomania',
};

console.log(JSON.stringify(user, null, 2));
