const app = require('../app');
const profiles = require('../profiles.json');
const random = require('./random');
const lib = require('./lib');
const pirate = require('./pirate');

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

app.get('/random/coins', (req, res) => {
  res.json(lib.getCoins(3));
});

app.get('/profiles/me', (req, res) => {
  const structia = profiles.find((profile) => profile.name === 'Structia');
  for (let i = 0; i < structia.friends.length; i++) {
    const friend_name = structia.friends[i];
    const friend_profile = profiles.find(
      (profile) => profile.name === friend_name
    );
    if (friend_profile) {
      const { name, image, legend, ship } = friend_profile;
      structia.friends[i] = { name, image, legend, ship };
    } else {
      structia.friends.splice(i, 1);
      i--;
    }
  }
  const { name, image, legend, friends, ship } = structia;
  res.json({ name, image, legend, friends, ship });
});

app.get('/profiles/me/coords', (req, res) => {
  const structia = profiles.find((profile) => profile.name === 'Structia');
  res.json(structia.location);
});

app.post('/profiles/me/move', (req, res) => {
  const structia = profiles.find((profile) => profile.name === 'Structia');
  const x = req.body.x;
  const y = req.body.y;
  if (x && y) {
    res.json(pirate.moveTo(structia, x, y));
  } else {
    res.json('Перекати поле ..*..');
  }
});
