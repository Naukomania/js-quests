const { getCoins, getCoords, getShipNumber } = require('./lib');

const user = {
  name: 'Oditrom',
  image: 'oditrom.png',
  corsair: true,
  legend:
    'Матерый морской волк. Знает, что если дело важное, то не надо суетиться.',
  friends: ['Bloomberg', 'AlexHook', 'Maria'],
  github: 'Oditrom',
  coins: getCoins(3),
  location: getCoords(),
  ship: getShipNumber(13, 11),
};
console.log(JSON.stringify(user, null, 2));
