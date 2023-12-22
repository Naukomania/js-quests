const app = require('../app');
const profiles = require('../profiles.json');
const { getRandomColor } = require('../common/random.js');
const { getDice } = require('../common/random.js');
const { getRPS } = require('../common/random.js');
const { getCoords } = require('./lib.js');
const { getCoins } = require('./lib.js');

app.get('/', function (req, res) {
  res.json('Hello world');
});

// app.get('/profiles', function (req, res) {
//   if (req.query.name) {
//     const name = req.query.name;
//     const profile = profiles.find(function (item) {
//       if (item.name === name) return true;
//       else return false;
//     });
//     res.json(profile);
//   } else res.json(profiles);
// });

app.get('/profiles', function (req, res) {
  if (req.query.name) {
    const name = req.query.name;
    const profile = profiles.find(function (item) {
      if (item.name === name) return true;
      else return false;
    });
    res.json(profile);
    return;
  }

  else if (req.query.corsair) {
    const isCorsair = Boolean(+req.query.corsair);
    const filteredProfiles = profiles.filter((profile) => {
      return profile.corsair === isCorsair;
    });
    res.json(filteredProfiles);
    return;
  }

//   else if (req.query.ship) {
//     const ship = Boolean(+req.query.ship);
//   } 
    else res.json(profiles);
});

app.post('/parrot', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.get('/random/color', function (req, res) {
  res.json(getRandomColor());
});

app.get('/random/dice', function (req, res) {
  res.json(getDice());
});

app.get('/random/rps', function (req, res) {
  res.json(getRPS());
});

app.get('/lib/coords', (req, res) => {
  res.json(getCoords());
});

app.get('/lib/coins', (req, res) => {
  res.json(getCoins(numCoins));
});
