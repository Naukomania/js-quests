// получаем пирата из файла
const user = require('./profile.json');
// для примера name = "Эмма Суон", location = [2, 10], corsair = false

// подключение библиотек
const { getRandomColor, getDice, getRPS, getPhrase } = require('../common/random');
const { sayHi, moveTo } = require('../common/pirate');

console.log(sayHi(user)); // output: Йо‑хо‑хо! Меня зовут Эмма Суон. Я - не корсар.

// получить случайный цвет в формате rgb
console.log(getRandomColor()); // #aa3f82

// // выбросить кости рандомно (от 1 до 6)
console.log(getDice()); // 3

// // выбросить случайно "камень", "ножницы" или "бумагу"
console.log(getRPS()); // "бумага"

// перемещение пирата на вектор x, y с шагом 1
// но в пределах от 0 до 99
console.log(moveTo(user, -1, 1)); // [1, 11]
console.log(moveTo(user, -1, 0)); // [0, 11]
console.log(moveTo(user, -1, 1)); // [0, 11] значение x некорректно - не двигаемся
console.log(moveTo(user, 1, 1)); // [1, 12]
console.log(moveTo(user, 1, 10)); // [1, 12] значение y некорректно - не двигаемся

// * дополнительное задание (не обязательное)
// получить фразу из трёх случайных частей
const part1 = ['Палундра!', 'Кавабанга!', 'Сарынь на кичку!', 'Тысяча чертей!'];
const part2 = ['В трюме', 'На острове', 'В море', 'Под третьей пальмой'];
const part3 = [
  'закончился ром!',
  'началось землетрясение!',
  'мертвецы устроили автопати!',
];
console.log(getPhrase(part1, part2, part3)); // Тысяча чертей! В трюме началось землетрясение!
// +1 coin каждому, кто запостит получившуюся фразу в чат "1. Environment & Basics" до среды 13.12 включительно
