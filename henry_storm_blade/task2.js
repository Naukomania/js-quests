const { getCoins, getCoords, getShipNumber, getGitNick } = require('./lib.js');

const user = {
  name: 'Henry StormBlade',
  image: "henry_storm_blade.png",
  corsair: true,
  legend:
    "Генри Штормовой клинок - высокий и мускулистый пират. Храбрый и решительный. Служил на 'Чёрной Жемчужине'",
  friends: ['Alex Hook', 'Сap'],
  coins: getCoins(3),
  ship: getShipNumber(7,6),
  location: getCoords(2),
  github: getGitNick(),
};

console.log(user);
