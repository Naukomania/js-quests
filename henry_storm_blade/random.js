const getRandomColor = () => {
  //  rgb 256 256 256
  // const randomInt = () => Math.floor(Math.random() * 256);
  // const r = randomInt(); // Случайное число для красного
  // const g = randomInt(); // Случайное число для зеленого
  // const b = randomInt(); // Случайное число для синего
  // return `rgb(${r}, ${g}, ${b})`; // Возвращаем строку в формате "rgb(число, число, число)"

  // Формат rgb HEX
  const randomColor = Math.floor(Math.random() * 16 ** 6).toString(16); // Генерируем случайное число в 16-ричной системе
  return `#${randomColor.toUpperCase()}`;
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
