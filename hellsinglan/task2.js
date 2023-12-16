const { getCoins, getCoords, getShipNumber } = require('./lib.js');

const user = {
  name: 'HellsingLan',
  image: 'hellsinglan.png',
  corsair: false,
  legend: 'Беглый матрос с Летучего Голландца.',
  friends: ['Cap', 'Structia', 'Oditrom'],
  coins: getCoins(3),
  ship: getShipNumber(21, 2),
  location: getCoords(),
  github: 'HellsingLan',
};

console.log(JSON.stringify(user, null, 2));
