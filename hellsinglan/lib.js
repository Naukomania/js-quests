// getCoin, // получение случайной монеты
// getCoins, // получение N случайных монет в виде массива
// getCoord, // получение случайной координаты от 0 до 99
// getCoords, // получение двух случайных координат
// getShipNumber, // получение случайного номера корабля (1 или 2) по номеру даты и месяца

function getCoin() {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}

function getCoins(numCoins) {
  const COINS = [];
  for (let i = 0; i < numCoins; i++) COINS.push(getCoin());
  return COINS;
}

function getCoord() {
  return Math.floor(Math.random() * 100);
}

function getCoords() {
  const LOCATION = [getCoord(), getCoord()];
  return LOCATION;
}

function getShipNumber(day, month) {
  let ship = (day + month) % 2;
  if (ship == 0) ship = Math.floor(Math.random() * 2 + 1);
  return ship;
}

module.exports = {
  getCoin,
  getCoins,
  getCoord,
  getCoords,
  getShipNumber,
};
