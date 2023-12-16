function getCoin() {
  // Получение случайной манеты
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}

/**
 * Получение N случайных монет в виде массива
 * @param {number} n - Количество монет
 * @returns {Array<string>} - Массив из монет
 */
function getCoins(n) {
  const coins = [];
  for (let i = 0; i < n; i++) {
    coins.push(getCoin());
  }
  return coins;
}

function getCoord() {
  // Получение случайной координаты от 0 до 99
  return Math.floor(Math.random() * 100);
}

function getCoords() {
  // Получение двух случайных координат
  return [getCoord(), getCoord()];
}

/**
 * Получение случайного номера корабля
 * @param {number} day - День Рождения
 * @param {number} month - Месяц Рождения
 * @returns {number} - Номер корабля
 */
function getShipNumber(day, month) {
  return ((day + month) % 2) + 1;
}

module.exports = {
  getCoin,
  getCoins,
  getCoord,
  getCoords,
  getShipNumber,
};
