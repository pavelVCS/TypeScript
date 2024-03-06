let names: string[] = ['Alice', 'Bob', 'Eve', 'Alice', 'Alice'];
let numbers: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let uniqueNames = new Set<string>(names);
uniqueNames.add('John');
console.log(uniqueNames); // Set { 'Alice', 'Bob', 'Eve' }

type Guest = {
  name: string;
  age: number;
};

let guests: Guest[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 28 },
  { name: 'Alice', age: 25 },
];

console.log(guests);

let uniqueGuests = new Set<Guest>(guests);

console.log(uniqueGuests);
