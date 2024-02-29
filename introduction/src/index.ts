let age: number = 30;
let club: string = 'Real Madrid';
let isFamous: boolean = true;

let players: string[] = [];

players.push('Ronaldo', 'Benzema', 'Modric');

let arr = [1];
// arr.push('labas'); - ismestu klaida, nes arr yra number[]

let mixed: (string | number)[] = [];

// good
mixed.push('hello');
mixed.push(20);

// mixed.push(false); - ismestu klaida, nes mixed yra string | number[]

let player: { name: string; age?: number } = {
  name: 'Ronaldo',
}; // age yra optional, t.y. gali buti ir gali nebuti. Taciau name yra required, t.y. turi buti

// player.team = 'Real Madrid'  -  ismestu klaida, nes player objektas neturi team rakta

// Function
//             parametru tipai    return tipas
const sum = (a: number, b: number): number => {
  return a + b;
};

function subt(a: number, b: number): number {
  return a - b;
}

sum(10, 20);

// =======================================================================================================
// any type
let price: any = 25;

price = 'twenty five';

let prices: any[] = [];
prices.push(25);
prices.push('twenty five');
prices.push(true);

// =======================================================================================================
// tuples
let coordinates: [number, number] = [1123, -12132];

let playerInfo: [string, number, boolean] = ['Ronaldo', 35, false];

// =======================================================================================================
// type && type aliases
type ID = number | string;
type MaybeID = ID | null;

const id: ID = 123;
const personId: ID = '123';

type PlayerType = {
  id: MaybeID;
  name: string;
  age: number;
  isFamous: boolean;
  clubs: Club[];
};

// extend
type FamousPlayerType = PlayerType & {
  awards: string[];
};

const ronaldo: FamousPlayerType = {
  id: 123,
  name: 'Ronaldo',
  age: 36,
  isFamous: true,
  clubs: [
    {
      name: 'Real Madrid',
      country: 'Spain',
    },
    {
      name: 'Juventus',
      country: 'Italy',
    },
  ],
  awards: ['Golden Ball', 'Golden Boot'],
};

// type function
type MathType = (a: number, b: number) => number;

const add: MathType = (a, b) => a + b;
const printName = (name: string): void => console.log(name);

add(10, 20);

let arrMath: MathType[] = [];

arrMath.push(add);
// arrMath.push(printName) - ismestu klaida, nes printName funkcija neturi teisingu parametru ir return tipu

//
//
// =======================================================================================================
// interfaces
interface Club {
  name: string;
  country: string;
}

interface Player {
  name: string;
  age: number;
  isFamous: boolean;
  clubs: Club[];
}

// extend interface
interface FamousPlayer extends Player {
  awards: string[];
}

function showPlayer(player: Player): void {
  console.log(`${player.name} is ${player.age} years old`);
  console.log(`Is he famous? ${player.isFamous}`);
  console.log('Clubs:');
  player.clubs.forEach((club) => {
    console.log(`- ${club.name} from ${club.country}`);
  });
}

function createPerson(
  name: string,
  age: number,
  isFamous: boolean,
  clubs: Club[]
): Player {
  return {
    name,
    age,
    isFamous,
    clubs,
  };
}

const messi: FamousPlayer = {
  name: 'Messi',
  age: 34,
  isFamous: true,
  clubs: [
    {
      name: 'Barcelona',
      country: 'Spain',
    },
    {
      name: 'PSG',
      country: 'France',
    },
  ],
  awards: ['Golden Ball', 'Golden Boot'],
};

showPlayer(messi);

const realMadridPlayers: Player[] = [
  {
    name: 'Ronaldo',
    age: 36,
    isFamous: true,
    clubs: [
      {
        name: 'Real Madrid',
        country: 'Spain',
      },
      {
        name: 'Juventus',
        country: 'Italy',
      },
    ],
  },
  {
    name: 'Benzema',
    age: 33,
    isFamous: true,
    clubs: [
      {
        name: 'Real Madrid',
        country: 'Spain',
      },
    ],
  },
];
