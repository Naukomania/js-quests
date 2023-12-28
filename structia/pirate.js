function sayHi(user) {
  if (user.corsair) return `Йо‑хо‑хо! Меня зовут ${user.name}. Я - корсар.`;
  return `Йо‑хо‑хо! Меня зовут ${user.name}. Я - не корсар.`;
}

function moveTo(user, x, y) {
  const newX = user.location[0] + x;
  const newY = user.location[1] + y;
  if (-1 <= x && x <= 1 && -1 <= y && y <= 1) {
    if (newX >= 0 && newX <= 99) {
      user.location[0] = newX;
    }

    if (newY >= 0 && newY <= 99) {
      user.location[1] = newY;
    }
  }

  return user.location;
}

module.exports = {
  sayHi,
  moveTo,
};
