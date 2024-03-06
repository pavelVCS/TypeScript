"use strict";
let names = ['Alice', 'Bob', 'Eve', 'Alice', 'Alice'];
let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueNames = new Set(names);
uniqueNames.add('John');
console.log(uniqueNames);
let guests = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Eve', age: 28 },
    { name: 'Alice', age: 25 },
];
console.log(guests);
let uniqueGuests = new Set(guests);
console.log(uniqueGuests);
//# sourceMappingURL=sets.js.map