// const user = require('./profile.json');

function sayHi(user) {
  return `Йо‑хо‑хо! Меня зовут ${user.name}. Я - не корсар.`;
}

function moveTo(user, moveX, moveY) {
  if (-1 <= moveX && moveX <= 1 && -1 <= moveY && moveY <= 1) {
    if (0 <= user.location[0] <= 100) user.location[0] += moveX;
    if (0 <= user.location[1] <= 100) user.location[1] += moveY;
  }
  return user.location;
}

module.exports = {
  sayHi,
  moveTo,
};

// function moveTo (y) {
//   let x = 10;
//   if (0 <= y < 100) x += y;
//   console.log(x);
// }

// moveTo(4);
