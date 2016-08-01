interface Adder {
	(num: number): number
}

function createAdder(firstNumber: number): Adder {
	return function(secondNumber) {
		return firstNumber + secondNumber;
	}
}

var addThree = createAdder(3);
console.log(addThree(3));
