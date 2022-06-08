function randomNumber (min, max) {
  if (min < 0 || max < 0) {
    return;
  }

  return Math.floor(Math.random() * (max - min) + min);
}

randomNumber();

function randomDecimalNumber (min, max, numberOfCharacters) {
  if (min < 0 || max < 0) {
    return;
  }

  return (Math.random() * (max - min) + min).toFixed(numberOfCharacters);
}

randomDecimalNumber();