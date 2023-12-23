const app = require('../app');
const profiles = require('../profiles.json');
const {
  getRandomColor,
  getDice,
  getRPS,
} = require('../henry_storm_blade/random');

const {
  getCoords,
  getCoins
} = require('../henry_storm_blade/lib.js');

app.get('/', function (req, res) {
  res.json('Hello World!');
});

app.get(`/profiles`, function (req, res) {
  const { corsair, ship } = req.query;

  let filteredProfiles = profiles;

  if (corsair !== undefined) {
    if (corsair !== '0' && corsair !== '1') {
      return res.status(400).json({ error: 'Invalid value for corsair parameter. Use 0 or 1.' });
    }
    const isCorsair = corsair === '1';
    filteredProfiles = filteredProfiles.filter((profile) => profile.corsair === isCorsair);
  }

  if (ship !== undefined) {
    const shipNumber = parseInt(ship);
    const validShips = [1, 2];
    if (!validShips.includes(shipNumber)) {
      return res.status(404).json({ error: `Ship ${shipNumber} not found` });
    }
    filteredProfiles = filteredProfiles.filter((profile) => profile.ship === shipNumber);
  }

  res.json(filteredProfiles);
});


// task 2.3
// /random/color
// /random/dice
// /random/rps
// /random/coords
// /random/coins

app.get('/random/color', function (req, res) {
  res.json(getRandomColor());
});
app.get('/random/dice', function (req, res) {
  res.json(getDice());
});
app.get('/random/rps', function (req, res) {
  res.json(getRPS());
});
app.get('/random/coords', function (req, res) {
  res.json(getCoords(2));
});
app.get('/random/coins', function (req, res) {
  res.json(getCoins(3));
});



// Post-запросы
app.post('/parrot/repeat', function(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Please provide text in the request body' });
  }

  const repeatedText = `${text} ${text}`;
  res.json({ repeatedText });
});

app.post('/parrot/ask', function(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Please provide text in the request body' });
  }

  const questionText = `Что такое ${text}?`;
  res.json({ questionText });
});