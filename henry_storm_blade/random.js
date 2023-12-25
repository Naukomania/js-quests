const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Генерация случайного числа в 16-ричной системе
  return `#${randomColor.padStart(6, '0').toUpperCase()}`; // Дополнение нулями до шести символов и приведение к верхнему регистру
};

const getDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
const getRPS = () => {
  const items = ['камень', 'ножницы', 'бумага'];
  const randomItem = Math.floor(Math.random() * 3);
  return items.find((_, i) => i === randomItem);
};
const getPhrase = (arr1, arr2, arr3) => {
  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const p1 = getRandomElement(arr1);
  const p2 = getRandomElement(arr2);
  const p3 = getRandomElement(arr3);

  return `${p1}${p2} ${p3}`;
};

module.exports = {
  getRandomColor,
  getDice,
  getRPS,
  getPhrase,
};
