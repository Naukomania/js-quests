const getCoin = () => {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
};

const getCoins = (num) => {
  const coins = [];
  let i = 0;
  while (i < num) {
    coins.push(getCoin());
    i += 1;
  }
  return coins;
};

const getCoord = () => {
  return Math.floor(Math.random() * 100);
};

const getCoords = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i += 1) {
    arr.push(i);
  }
  let newArr = arr.map(() => getCoord());
  return newArr;
};

const getShipNumber = () => {
  let random = (7 + 6) % 2 === 0 ? 2 : 1;
  return random;
};

const getGitNick = () => {
  return 'garryKarri';
};

module.exports = {
  getCoin,
  getCoins,
  getCoord,
  getCoords,
  getShipNumber,
  getGitNick,
};
