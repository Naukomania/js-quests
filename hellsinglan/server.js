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

app.post('/parrot', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.post('/parrot/repeat', (req, res) => {
  const text = req.body.text;
  text ? res.json(`${text} ${text}`) : errorAnswer();
})

app.post('/parrot/ask', (req, res) => {
  const text = req.body.text;
  text ? res.json(`Без бутылки рома не разберешься \"${text}\"`) : errorAnswer();
})

function errorAnswer(){
  return res.json('Ничего я вам не скажу!');
}

app.get('/profiles', function (req, res) {
  if (req.query.name) {
    const name = req.query.name;
    const profile = profiles.find(function (item) {
      return item.name === name;
    });
    return res.json(profile);
  } 
  else if (req.query.corsair) {
    const isCorsair = Boolean(req.query.corsair);
    const filterProfilesCorsair = profiles.filter((profile) => {
      return profile.corsair === isCorsair;
    });
    return res.json(filterProfilesCorsair);
  }
  else if (req.query.ship) {
    const ship = Number(req.query.ship);
    const filterProfilesShip = profiles.filter((profile) => {
      return profile.ship === ship;
    });
    return res.json(filterProfilesShip);
  }
  res.json(profiles);
});


app.get('/random/:command', (req, res) => {
  switch (req.params.command) {
    case 'color':
      res.json(getRandomColor());
      break;
    case 'dice':
      res.json(getDice());
      break;
    case 'rps':
      res.json(getRPS());
      break;
  }
});

app.get('/lib/:command', (req, res) => {
  switch (req.params.command){
    case 'coords':
      res.json(getCoords());
      break;
    case 'coins':
      res.json(getCoins(req.query.num));
      break;
    default: errorAnswer();
  }
})
