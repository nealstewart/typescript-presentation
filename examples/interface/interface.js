function movePointByThree(point) {
    return {
        x: point.x + 3,
        y: point.y + 3
    };
}
var threeDimensionalPoint = {
    x: 3,
    y: 3,
    z: 9
};
console.log(movePointByThree(threeDimensionalPoint));
var somethingElse = {
    x: 3,
    y: 3,
    someOtherProperty: 5
};
console.log(movePointByThree(somethingElse));
