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
    coins: ["cd6c02", "4ff309", "52a8c3"],
    ship: 1,
    location: [47, 50],
    github: "https://github.com/ctpaep"
}

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
