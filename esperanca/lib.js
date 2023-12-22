// getCoin, // получение случайной монеты
// getCoins, // получение N случайных монет в виде массива
// getCoord, // получение случайной координаты от 0 до 99
// getCoords, // получение двух случайных координат 
// getShipNumber, // получение случайного номера корабля (1 или 2) по номеру даты и месяца

function getCoin() {
    return Math.floor(Math.random() * 16 ** 5).toString(16);
  }
  
  function getCoins(num) {
    const coins = [];
    for (let i = 0; i < num; i += 1) {
      coins.push(getCoin());
    }
    return coins;
  }
  
  function getCoord() {
    return Math.floor(Math.random() * 100);
  }
  
  function getCoords() {
    return [getCoord(), getCoord()];
  }
  
  function getShipNumber(day, month) {
    return ((day + month) % 2) + 1;
  }
  
  module.exports = {
    getCoin,
    getCoins,
    getCoord,
    getShipNumber,
    getCoords,
  };