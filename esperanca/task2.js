const { getShipNumber, getCoins, getCoords, getCoord } = require('./lib');
const user = {
    name: 'Esperanca',
    image: 'eperanca.png',
    corsair: false,
    legend: 'Путешественница. Видит будущее. Там, где она всегда есть Надежда.',
    friends: ['Cap', 'Maria', 'Structia', 'HellsingLan'],
    coins: getCoins (4),
    ship:getShipNumber (30,8),
    location:getCoord (),
    github:'NadezhdaDorogi',
  };
  console.log(JSON.stringify(user, null, 2));