class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "addition":
        return this.a + this.b;
      case "subtraction":
        return this.a - this.b;
      case "multiplication":
        return this.a * this.b;
      case "division":
        if (this.b === 0) return "Cannot divide by zero";
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}

const calc = new Calculator(9.0, 4.0, "subtraction");
console.log(calc.calculate());
