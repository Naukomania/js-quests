const { getShipNumber, getCoint, getCoins, getCoords } = require('./lib');
type userSchema = {
    name: String,
    image: String,
    corsair: Boolean,
    legend: String,
    friends: [String],
    coins: [String],
    ship: Number,
    location: [Number],
    github: String,
};

const user : userSchema = {
name: "PanPan",
    image: 'blob:https://web.telegram.org/f69fccc2-db5c-499c-89a7-599ae19494ae',
    corsair: true,
    legend:
        'Забывчивый немного сумасшедший библиотекарь. Который может подсказать что-то, но периодически что-то может и напутать.',
    friends: ['Cap ', 'HellsingLan', 'Bloomberg'],
    coins: getCoins(3, getCoint ),
    ship: getShipNumber(17, 11),
    location: getCoords(),
    github: "https://github.com/ctpaep"
}

console.log(JSON.stringify(user, null, 2));

function getCoint () : string {
    const coin = Math.pow(16, 6);
    return Math.floor(Math.random() * coin).toString(16)
}

function getShops () : number {
    return ((17 + 11) % 2) + 1
}

const getCord = () => {
    return Math.floor(Math.random()*100)
}
