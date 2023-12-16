const userSchema = {
  name: String,
  image: String,
  corsair: Boolean,
  legend: String,
  friend: [String],
  coins: [String],
  ship: Number,
  location: [Number],
  github: String,
};

const user = {
  name: 'HellsingLan',
  image: 'hellsinglan.png',
  corsair: false,
  legend: 'Беглый матрос с Летучего Голландца.',
  friend: ['Cap', 'Structia', 'Oditrom'],
  coins: [],
  ship: (21 + 2) % 2,
  location: [],
};

function getCoin() {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}

function getCoord() {
  return Math.floor(Math.random() * 100);
}

for (let i = 0; i < 3; i++) {
  user.coins.push(getCoin());
}

user.location = [getCoord(), getCoord()];
user.github = 'HellsingLan';

console.log(JSON.stringify(user, null, 2));
