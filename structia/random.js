function getRandomColor() {
  const hexRGB = [];
  for (let i = 0; i < 3; i++) {
    hex = Math.floor(Math.random() * 255).toString(16);
    hexRGB.push(hex.length === 1 ? '0' + hex : hex);
  }
  return `#${hexRGB[0]}${hexRGB[1]}${hexRGB[2]}`;
}

function getDice() {
  res = Math.floor(Math.random() * 6) + 1;
  return res;
}

function getRPS() {
  RPS = ['камень', 'ножницы', 'бумага'];
  const randomRPS = RPS[Math.floor(Math.random() * RPS.length)];
  return randomRPS;
}

function getPhrase(part1, part2, part3) {
  randomPart1 = part1[Math.floor(Math.random() * part1.length)];
  randomPart2 = part2[Math.floor(Math.random() * part2.length)];
  randomPart3 = part3[Math.floor(Math.random() * part3.length)];
  return `${randomPart1} ${randomPart2} ${randomPart3}`;
}

module.exports = {
  getRandomColor,
  getDice,
  getRPS,
  getPhrase,
};
