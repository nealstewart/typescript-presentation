function createAdd(firstNumber: number) : (num: number) => number {
	return function(secondNumber) {
		return firstNumber + secondNumber;
	}
}

var addThree = createAdd(3);
console.log(addThree(3));
