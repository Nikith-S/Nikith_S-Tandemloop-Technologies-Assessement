function countMultiples(numbers) {
  const multiples = {};
  for (let i = 1; i <= 9; i++) {
    multiples[i] = 0;
  }

  numbers.forEach((num) => {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        multiples[i]++;
      }
    }
  });

  return multiples;
}

const inputNumbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(inputNumbers));
