const profiles = require('./profiles.json');
const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log(`Server started on http://localhost:3000`);
});

module.exports = app;
