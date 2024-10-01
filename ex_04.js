let a = 2;
let b = 6;
let action = "add";

function calculator() {
	if (action === "add") {
  addition(a, b);
  } else if (action === "sub") {
  subtraction(a, b);
  }
  return addition(a, b);
}

function addition() {
	return a + b;
}

function subtraction() {
  return a - b;
}

// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
