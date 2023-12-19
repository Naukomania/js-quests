const app = require('../app');
const profiles = require('../profiles');
const { getRandomColor } = require('../common/random');

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/random/color', (req, res) => {
  res.json(getRandomColor());
})

app.get('/random/dice', (req, res) => {
  // @todo
})

// @todo
// /random/rps
// /random/coords
// /random/rps

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
    // @todo: фильтруем пиратов с корабля с номером req.query.ship
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
  // @todo: Ответ: Что значит req.body.text?
})

app.post('/')
