function getCoint (): string {
    const coin = Math.pow(16, 6);
    return Math.floor(Math.random() * coin).toString(16)
}

function getCoins: [string] (num, foo=getCoint) {
    const result = [];
    for (let i =0; i < num; i++) {
        result.push(getCoint())
    }
    return result
}


function getCoord() : number { // получение случайной координаты от 0 до 99
    return Math.floor(Math.random() * 100);
}

function getCoords() : [number] { // получение двух случайных координат
    return [getCoord(), getCoord()];
}

function getShipNumber (num, num2) : number { // получение случайного номера корабля (1 или 2) по номеру даты и месяца
        return ((num + num2) % 2) + 1
    }


module.exports = {
    getCoin,
    getCoins,
    getCoord,
    getShipNumber,
    getCoords,
};
