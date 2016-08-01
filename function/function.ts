function createAdder(firstNumber: number) {
	return function(secondNumber: number): number {
		return firstNumber + secondNumber;
	}
}

var addThree = createAdder(3);
console.log(addThree(4));