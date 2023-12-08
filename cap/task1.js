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
  name: 'Cap',
  image: 'cap.png',
  corsair: false,
  legend:
    'Возможно, турок. Старый солдат, не знающий слов любви. Иногда придумывает пословицы и ругательства. Потом делает вид, что так говорят все уважаемые пираты.',
  friends: ['Henry StormBlade', 'HellsingLan', 'Bloomberg'],
  coins: [],
  ship: ((19 + 3) % 2) + 1,
  location: [],
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
user.github = 'naukomania';

console.log(JSON.stringify(user, null, 2));
