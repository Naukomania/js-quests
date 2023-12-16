const userSchema = {
  name: String,
  image: String,
  corsair: Boolean,
  legend: String,
  friends: [String],
  coins: [String],
  ship: Number,
  location: [Number],
  github: String,
};

const user = {
  name: 'Structia',
  image: 'structia.png',
  corsair: false,
  legend:
    'Открывает новые горизонты. Не упустит возможность поспать в пивном трюме. \
Одноглазый. Заботится о собственном домашнем питоне',
  friends: ['HellsingLan', 'Maria', 'Cap'],
  coins: [],
  ship: ((16 + 6) % 2) + 1,
  location: [],
  github: 'mksmvnv',
};

function getCoin() {
  for (let i = 0; i < 3; ++i) {
    const coin = Math.floor(Math.random() * 16 ** 5).toString(16);
    user.coins.push(coin);
  }
  console.log(user.coins);
}

function getCoord() {
  for (let i = 0; i < 2; ++i) {
    const coord = Math.floor(Math.random() * 100);
    user.location.push(coord);
  }
  console.log(user.location);
}

getCoin();
getCoord();

console.log(JSON.stringify(user, null, 2));
