const user = {
  name: 'Henry StormBlade',
  image: 'henry_storm_blade.png',
  corsair: true,
  legend:
    "Генри Штормовой клинок - высокий и мускулистый пират. Храбрый и решительный. Служил на 'Чёрной Жемчужине'",
  friends: ['Alex Hook', 'cap'],
  coins: [],
  ship: (7 + 6) % 2,
  location: [],
  github: '',
};

function getCoin() {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}
for (let i = 0; i < 3; i += 1) {
  user.coins.push(getCoin());
}

function getCoord() {
  return Math.floor(Math.random() * 100);
}

user.location = [getCoord(), getCoord()];
user.github = 'garryKarri';
console.log(user);
