function randomNumber (min, max) {
  if (min < 0 || max < 0) {
    console.log('Числа не могут быть меньше 0');
    return;
  }
  if (max <= min) {
    console.log('Число "до" должно быть больше числа "от"');
    return;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

randomNumber();

function randomDecimalNumber (min, max, numberOfCharacters) {
  if (min < 0 || max < 0) {
    console.log('Числа не могут быть меньше 0');
    return;
  }
  if (max <= min) {
    console.log('Число "до" должно быть больше числа "от"');
    return;
  }
  return (Math.random() * (max - min) + min).toFixed(numberOfCharacters);
}

randomDecimalNumber();
