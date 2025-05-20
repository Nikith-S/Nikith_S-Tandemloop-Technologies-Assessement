function generateComplexSeries(a) {
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 1; i <= count * 2 - 1; i += 2) {
    result.push(i);
  }
  return result.join(", ");
}

const input = 3;
console.log(`Input: ${input}, Output: ${generateComplexSeries(input)}`);
