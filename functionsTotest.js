function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else {
    throw new Error("Conditions not met");
  }
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    if (typeof this.a === "number" && typeof this.b === "number") {
      return this.a + this.b;
    }
    throw new Error("Only numbers are accepted");
  }
  substract() {
    if (typeof this.a === "number" && typeof this.b === "number") {
      return this.a - this.b;
    }
    throw new Error("Only numbers are accepted");
  }
  divide() {
    if (typeof this.a === "number" && typeof this.b === "number") {
      return this.a / this.b;
    }
    throw new Error("Only numbers are accepted");
  }
  multiply() {
    if (typeof this.a === "number" && typeof this.b === "number") {
      return this.a * this.b;
    }
    throw new Error("Only numbers are accepted");
  }
}

function capitalize(string) {
  var capitalizeFirstLetter;
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      capitalizeFirstLetter = string[0].toUpperCase();
    } else {
      capitalizeFirstLetter = capitalizeFirstLetter + string[i];
    }
  }
  return capitalizeFirstLetter;
}

module.exports = {
  stringLength: stringLength,
  reverseString: reverseString,
  Calculator: Calculator,
  capitalize: capitalize,
};
