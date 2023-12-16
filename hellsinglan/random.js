// const task3 = require("./task3.js");

function getRandomColor() {
  const ARRAY = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) color += ARRAY[Math.floor(Math.random() * 16)];
  return color;
}

function getDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function getRPS() {
  const RPS = ['камень', 'ножницы', 'бумага'];
  return RPS[Math.floor(Math.random() * 3)];
}

function getPhrase(part1, part2, part3) {
    const PHRASE1 = part1[Math.floor(Math.random() * 4)];
    const PHRASE2 = part2[Math.floor(Math.random() * 4)];
    const PHRASE3 = part3[Math.floor(Math.random() * 3)];
    return `${PHRASE1} ${PHRASE2} ${PHRASE3}`;
}

module.exports = {
    getRandomColor,
    getDice,
    getRPS,
    getPhrase,
};

// console.log(getDice());
// console.log(getRPS());
// console.log(getRandomColor());
// console.log(getPhrase(part1, part2, part3));