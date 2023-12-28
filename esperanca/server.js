const app = require('../app');
const profiles = require('../profiles.json');
const { getDice } = require('../common/random');
const { getCoins } = require('./lib');
const { getRPS } = require('../common/random');
const { getCoords } = require('./lib');

app.get('/', function (req, res) {
  res.json('Hello World!');
});

// app.get('/profiles', function (req, res) {
//   res.json(profiles);
// });

const { getRandomColor } = require('../common/random');

app.get('/random/color', (req, res) => {
  res.json(getRandomColor());
});

app.get('/random/dice', (req, res) => {
  res.json(getDice());
});

app.get('/random/rps', (req, res) => {
  res.json(getRPS());
});

app.get('/lib/coords', (req, res) => {
  res.json(getCoords());
});

app.get('/lib/coins', (req, res) => {
  res.json(getCoins(req.query.num));
});

app.get('/profiles', (req, res) => {
  if (req.query.corsair) {
    const isCorsair = Boolean(+req.query.corsair); // приводим 0 к false и 1 к true
    const filteredProfiles = profiles.filter((profile) => {
      return profile.corsair === isCorsair;
    });
    res.json(filteredProfiles);
    return;
  }
  if (req.query.ship) {
    const ship = +req.query.ship;
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
    res.json('Ничего я вам не скажу!');
  }
});

app.post('/parrot/ask', (req, res) => {
  const text = req.body.text;
  if (text) {
    res.json(`${text}`);
  } else {
    res.json('Ничего я вам не скажу!');
  }
});

// задача 2.4

app.get('/profiles/me', (req, res) => {
  const esperanca = profiles.find((profile) => profile.name === 'Esperanca');
  for (let i = 0; i < esperanca.friends.length; i++) {
    const friend_name = esperanca.friends[i];
    const friend_profile = profiles.find(
      (profile) => profile.name === friend_name
    );
    if (friend_profile) {
      const { name, image, legend, ship } = friend_profile;
      esperanca.friends[i] = { name, image, legend, ship };
    } else {
      esperanca.friends.splice(i, 1);
      i--;
    }
  }
  const { name, image, legend, friends, ship } = esperanca;
  res.json({ name, image, legend, friends, ship });
});

app.get('/profiles/me/coords', (req, res) => {
  const esperanca = profiles.find((profile) => profile.name === 'Esperanca');
  res.json(esperanca.location);
});

app.post('/profiles/me/move', (req, res) => {
  const esperanca = profiles.find((profile) => profile.name === 'Esperanca');
  const pirate = require('../common/pirate');
  const x = req.body.x;
  const y = req.body.y;
  if (-1 <= x && x <= 1 && -1 <= y && y <= 1) {
    res.json(pirate.moveTo(esperanca, x, y));
  }
});
