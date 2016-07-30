function createAdder(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    };
}
var adder = createAdder(3);
console.log(adder(4));
