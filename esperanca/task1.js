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
  name: 'Esperanca',
  image: 'esperanca.png',
  corsair: false,
  legend: 'Путешественница. Видит будущее. Там, где она всегда есть Надежда.',
  friends: ['Cap', 'Maria', 'Structia', 'HellsingLan'],
  coins: [],
  ship: ((30 + 8) % 2) + 1,
  location: [],
  github: 'NadezhdaDorogi',
};

function getCoin() {
  return Math.floor(Math.random() * 16 ** 5).toString(16);
}

function getCoord() {
  return Math.floor(Math.random() * 100);
}

for (let i = 0; i < 3; i += 1) {
  user.coins.push(getCoin());
}

user.location = [getCoord(), getCoord()];

console.log(JSON.stringify(user, null, 2));
