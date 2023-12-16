const app = require('../app');
const profiles = require('../profiles.json');

app.get('/', function (req, res) {
  res.json('Hello World!');
});

app.get('/profiles', function (req, res) {
  res.json(profiles);
});
