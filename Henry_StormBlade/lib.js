const getCoin = () => {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
};

const getCoins = (user) => {
  for (let i = 0; i < 3; i += 1) {
    user.coins.push(getCoin());
  }
};

const getCoord = () => {
  return Math.floor(Math.random() * 100);
};

const getCoords = (user) => {
  return (user.location = [getCoord(), getCoord()]);
};

const getShipNumber = (user) => {
  let random = (7 + 6) % 2 === 0 ? 2 : 1;
  return (user.ship = random);
};

const getGitNick = (user) => {
  return (user.github = 'garryKarri');
};

module.exports = {
  getCoin,
  getCoins,
  getCoord,
  getCoords,
  getShipNumber,
  getGitNick
};
