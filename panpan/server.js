const app = require('../app');
const profiles = require('../profiles.json');
const { getRandomColor, getDice, getRPS } = require('../common/random.js');
const { getCoords, getCoins } = require('./lib.js');

app.get('/', function (req, res) {
    res.json('Hello World!');
});

app.get('/profiles', function (req, res) {
    const ship = req.query.ship;
    const corsair = req.query.corsair;

    // Проверка наличия параметров ship и corsair в запросе и их значения
    if (ship && (ship === '1' || ship === '2') && corsair && (corsair === '0' || corsair === '1')) {
        // Фильтрация команды profiles по параметрам ship и corsair
        const filteredProfiles = profiles.filter(profile => profile.ship === ship && profile.corsair === corsair);
        res.json(filteredProfiles);
    } else {
        res.status(400).json({ error: 'Invalid query parameters: ship and corsair must be either 1 or 2, and 0 or 1 respectively' });
    }
});

app.get('/random/:command', (req, res) => {
    const commands = {
        'color': () => res.json(getRandomColor()),
        'dice': () => res.json(getDice()),
        'rps': () => res.json(getRPS()),
        'coords': () => res.json(getCoords()),
        'coins': () => res.json(getCoins())
    };

    const command = req.params.command;
    if (command in commands) {
        commands[command]();
    } else {
        errorAnswer(res);
    }
});

app.post('/parrot/repeat', function (req, res) {
    res.json(req.body.text);
});

app.post('/parrot/ask', function (req, res) {
    res.json(` Что такое ${req.body.text}`);
});

function errorAnswer(res){
    return res.json('Каналья, что ты несешь?!');
}
