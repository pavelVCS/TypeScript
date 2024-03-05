"use strict";
function returnString(arg) {
    return arg;
}
function identity(arg) {
    return arg;
}
identity('forward');
identity(2);
const players = [
    {
        name: 'Messi',
        age: 34,
    },
    {
        name: 'Ronaldo',
        age: 36,
    },
];
const numbers = [1, 2, 3, 4, 5];
function showFirst(arr) {
    return arr[0];
}
const firstPlayer = showFirst(players);
const firstNumber = showFirst(numbers);
console.log(firstPlayer);
console.log(firstNumber);
function addIdToObject(obj) {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
}
const car = {
    brand: 'Ford',
    model: 'Fiesta',
    year: 2002,
};
const driver = {
    name: 'John',
    age: 25,
    license: true,
};
const carWithId = addIdToObject(car);
const driverWithId = addIdToObject(driver);
console.log(carWithId);
console.log(driverWithId);
const guestsNameData = {
    name: 'guests names',
    data: ['John', 'Jane', 'Doe'],
};
const guestsAgeData = {
    name: 'guests ages',
    data: [25, 30, 35],
};
const roseData = {
    name: 'rose',
    data: {
        family: 'Rosaceae',
        color: 'red',
        location: 'Europe',
    },
};
class Box {
    constructor(content) {
        this.content = content;
    }
    get showContent() {
        return this.content;
    }
}
const stringBox = new Box('Hello with get');
const numberBox = new Box(2222);
console.log(stringBox.showContent);
console.log(numberBox.showContent);
//# sourceMappingURL=index.js.map