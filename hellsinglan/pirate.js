// const user = require('./profile.json');

function sayHi(user) {
  return `Йо‑хо‑хо! Меня зовут ${user.name}. Я - ${user.corsare ? '' : 'не '}корсар.`;
}

function moveTo(user, moveX, moveY) {
  if (-1 <= moveX && moveX <= 1 && -1 <= moveY && moveY <= 1) {
    if (0 <= user.location[0] + moveX && user.location[0] <= 99) user.location[0] += moveX;
    if (0 <= user.location[1] + moveY && user.location[1] <= 99) user.location[1] += moveY;
  }
  return user.location;
}

module.exports = {
  sayHi,
  moveTo,
};

