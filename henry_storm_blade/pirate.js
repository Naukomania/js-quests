const sayHi = (user) => {
 return `Йо‑хо‑хо! Меня зовут ${user.name}. Я - ${user.corsair? "корсар":"не корсар"}.`

};
const moveTo = (user, x, y) => {
  const newX = user.location[0] + x;
  const newY = user.location[1] + y;

  // Проверяем, чтобы новые координаты оставались в пределах от 0 до 99
  const isValidX = newX >= 0 && newX <= 99;
  const isValidY = newY >= 0 && newY <= 99;
   
  // Если новые координаты в пределах допустимых значений, обновляем положение пирата
  if (isValidX && isValidY) {
    user.location = [newX, newY];
  } else if (isValidX) {
    user.location = [newX, user.location[1]];
  } else if (isValidY) {
    user.location = [user.location[0], newY];
  }
  return user.location;
};

module.exports = {
  sayHi,
  moveTo,
};