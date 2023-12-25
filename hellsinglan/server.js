const app = require('../app');
const profiles = require('../profiles.json');
const { getRandomColor, getDice, getRPS } = require('../common/random.js');
const { getCoords, getCoins } = require('./lib.js');
const { moveTo } = require('../common/pirate.js');

app.get('/', function (req, res) {
  res.json('Hello world');
});

app.post('/parrot', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.post('/parrot/:command', (req, res) => {
  const text = req.body.text;
  switch(req.params.command){
    case 'repeat':
      text ? res.json(`${text} ${text}`) : errorAnswer(res);
      break;
    case 'ask':
      text ? res.json(`Без бутылки рома не разберешься \"${text}\"`) : errorAnswer(res);
      break;
  }
})

app.get('/profiles', (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    const profile = profiles.find((item) => item.name === name);
    return res.json(profile);
  } 
  else if (req.query.corsair) {
    const isCorsair = req.query.corsair;
    const filterProfilesCorsair = profiles.filter((profile) => profile.corsair === Boolean(+isCorsair));
    if (isCorsair == 0 || isCorsair == 1) 
      return res.json(filterProfilesCorsair);
    else return errorAnswer(res);
  }
  else if (req.query.ship) {
    const ship = Number(req.query.ship);
    const filterProfilesShip = profiles.filter((profile) => profile.ship === ship);
    if (ship == 1 || ship == 2) 
      return res.json(filterProfilesShip);
    else return errorAnswer(res);
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
    default: errorAnswer(res);
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
    default: errorAnswer(res);
  }
})

app.get('/profiles/me', (req, res) => {
  const hellsinglan = profiles.find((profile) => profile.name === 'HellsingLan');
  let friendName, friendProfile;
  for(let i = 0; i < hellsinglan.friend.length; i++){
    friendName = hellsinglan.friend[i];
    friendProfile = profiles.find((profile) => profile.name === friendName);
    if(friendProfile){
      const { name, image, legend, ship } = friendProfile;
      hellsinglan.friend[i] = { name, image, legend, ship };
    } else hellsinglan.friend.splice(i--, 1);
  }
  const { name, image, legend, friend, ship } = hellsinglan;
  return res.json({ name, image, legend, friend, ship });
})

app.post('/profiles/me/:command', (req, res) => {
  const hellsinglan = profiles.find((profile) => profile.name === 'HellsingLan');
  switch(req.params.command){
    case 'coords':
      res.json(hellsinglan.location);
      break;
    case 'move':
      const x = req.body.x;
      const y = req.body.y;
      if (typeof(x) === 'number' && typeof(y) === 'number'){
        if((-1 <= x && x <=1) && (-1 <= y && y <= 1))
          res.json(moveTo(hellsinglan, x, y))
        else res.json('Что ты прыгаешь? Ходи, как все нормальные одноногие пираты!');
      } else errorAnswer(res);
      break;
    default: errorAnswer(res);
  }
})

function errorAnswer(res){
  return res.json('Каналья, что ты несешь?!');
}