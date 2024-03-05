// generics types

function returnString(arg: string): string {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}

type Position = 'forward' | 'midfield' | 'defender' | 'goalkeeper';

identity<Position>('forward');
identity<number>(2);

type Player = {
  name: string;
  age: number;
};

const players: Player[] = [
  {
    name: 'Messi',
    age: 34,
  },
  {
    name: 'Ronaldo',
    age: 36,
  },
];

const numbers: number[] = [1, 2, 3, 4, 5];

function showFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstPlayer = showFirst<Player>(players);
const firstNumber = showFirst<number>(numbers);

console.log(firstPlayer);
console.log(firstNumber);

// Intersection types

type Car = {
  brand: string;
  model: string;
  year: number;
};

type Driver = {
  name: string;
  age: number;
  license: boolean;
};

type ID = { id: number };

function addIdToObject<T>(obj: T): T & ID {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
}

const car: Car = {
  brand: 'Ford',
  model: 'Fiesta',
  year: 2002,
};

const driver: Driver = {
  name: 'John',
  age: 25,
  license: true,
};

const carWithId = addIdToObject<Car>(car);
const driverWithId = addIdToObject<Driver>(driver);

console.log(carWithId);
console.log(driverWithId);

// generics with interfaces

interface Data<T> {
  name: string;
  data: T;
}

const guestsNameData: Data<string[]> = {
  name: 'guests names',
  data: ['John', 'Jane', 'Doe'],
};

const guestsAgeData: Data<number[]> = {
  name: 'guests ages',
  data: [25, 30, 35],
};

type Flower = {
  family: string;
  color: string;
  location: string;
};

const roseData: Data<Flower> = {
  name: 'rose',
  data: {
    family: 'Rosaceae',
    color: 'red',
    location: 'Europe',
  },
};

// generics with class

class Box<T> {
  constructor(content: T) {
    this.content = content;
  }
  private content: T;

  get showContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>('Hello with get');
const numberBox = new Box<number>(2222);

console.log(stringBox.showContent);
console.log(numberBox.showContent);
