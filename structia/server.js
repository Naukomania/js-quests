const app = require('../app');
const profiles = require('../profiles.json');
const random = require('./random');
const lib = require('./lib');

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/profiles', (req, res) => {
  if (req.query.corsair) {
    const isCorsair = Boolean(+req.query.corsair);
    const filteredProfiles = profiles.filter((profile) => {
      return profile.corsair === isCorsair;
    });
    res.json(filteredProfiles);
    return;
  }
  if (req.query.ship) {
    const ship = parseInt(req.query.ship);
    const filteredProfiles = profiles.filter((profile) => {
      return profile.ship === ship;
    });
    res.json(filteredProfiles);
    return;
  }
  res.json(profiles);
});

app.post('/parrot/repeat', (req, res) => {
  const text = req.body.text;
  if (text) {
    res.json(`${text} ${text}`);
  } else {
    res.json('Перекати поле ..*..');
  }
});

app.post('/parrot/ask', (req, res) => {
  const text = req.body.text;
  if (text) {
    res.json(`Что такое ${text}?`);
  } else {
    res.json('Перекати поле ..*..');
  }
});

app.get('/random/color', (req, res) => {
  res.json(random.getRandomColor());
});

app.get('/random/dice', (req, res) => {
  res.json(random.getDice());
});

app.get('/random/rps', (req, res) => {
  res.json(random.getRPS());
});

app.get('/random/coords', (req, res) => {
  res.json(lib.getCoords());
});

const n = 3; // Почему то иначе аргумент n используемый в lib.js не подтягивается из task2.js

app.get('/random/coins', (req, res) => {
  res.json(lib.getCoins(n));
});
