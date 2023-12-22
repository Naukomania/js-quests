const app = require('../app');

const profiles = require('../profiles.json');

app.get('/', function (req, res) {
  res.json('Hello world');
});

app.get('/profiles', function (req, res) {
  if (req.query.name) {
    const name = req.query.name;
    const profile = profiles.find(function (item) {
      if (item.name === name) return true;
      else return false;
    });
    res.json(profile);
  } else res.json(profiles);
});

app.post('/parrot', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});
