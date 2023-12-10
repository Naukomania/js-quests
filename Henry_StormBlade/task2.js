const {
  getCoin,
  getCoins,
  getCoord,
  getCoords,
  getShipNumber,
  getGitNick,
} = require('./lib.js');

const user = {
  name: 'Henry StormBlade',
  image: 'Henry_StormBlade.png',
  corsair: true,
  legend:
    "Генри Штормовой клинок - высокий и мускулистый пират. Храбрый и решительный. Служил на 'Чёрной Жемчужине'",
  friends: ['Alex Hook', 'Сap'],
  coins: [],
  ship: '',
  location: [],
  github: '',
};

getCoin();
getCoins(user);
getCoord();
getCoords(user);
getShipNumber(user);
getGitNick(user);

console.log(user);
