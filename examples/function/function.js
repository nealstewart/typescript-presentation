function createAdder(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    };
}
var addThree = createAdder(3);
console.log(addThree(3));
