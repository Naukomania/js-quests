function getRandomColor() {
  const ARRAY = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) color += ARRAY[Math.floor(Math.random() * 16)];
  return color;
}

function getDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRPS() {
  return getRandomEl(['камень', 'ножницы', 'бумага']);
}

function getPhrase(part1, part2, part3) {
  return `${getRandomEl(part1)} ${getRandomEl(part2)} ${getRandomEl(part3)}`;
}

module.exports = {
  getRandomColor,
  getDice,
  getRPS,
  getPhrase,
};
