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
  name: 'Bloomberg',
  image: 'bloomberg.png',
  corsair: true,
  legend:
    'Старый пират. Друг Флинта. Жаден. Ради денег готов на все. Характер мерзкий. Женат.',
  friends: ['Esperança', 'Maria', 'Cap'],
  coins: [],
  ship: ((14 + 11) % 2) + 1,
  location: [],
};

function getcoin() {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}

function getCord() {
  return Math.floor(Math.random() * 100);
}
user.coins.push(getcoin());
user.coins.push(getcoin());
user.coins.push(getcoin());
user.location = [getCord(), getCord()];
user.github = 'BisVictor';
console.log(JSON.stringify(user, null, 2));
