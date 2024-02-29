"use strict";
let age = 30;
let club = 'Real Madrid';
let isFamous = true;
let players = [];
players.push('Ronaldo', 'Benzema', 'Modric');
let arr = [1];
let mixed = [];
mixed.push('hello');
mixed.push(20);
let player = {
    name: 'Ronaldo',
};
const sum = (a, b) => {
    return a + b;
};
function subt(a, b) {
    return a - b;
}
sum(10, 20);
let price = 25;
price = 'twenty five';
let prices = [];
prices.push(25);
prices.push('twenty five');
prices.push(true);
let coordinates = [1123, -12132];
let playerInfo = ['Ronaldo', 35, false];
const id = 123;
const personId = '123';
const ronaldo = {
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
const add = (a, b) => a + b;
const printName = (name) => console.log(name);
add(10, 20);
let arrMath = [];
arrMath.push(add);
function showPlayer(player) {
    console.log(`${player.name} is ${player.age} years old`);
    console.log(`Is he famous? ${player.isFamous}`);
    console.log('Clubs:');
    player.clubs.forEach((club) => {
        console.log(`- ${club.name} from ${club.country}`);
    });
}
function createPerson(name, age, isFamous, clubs) {
    return {
        name,
        age,
        isFamous,
        clubs,
    };
}
const messi = {
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
const realMadridPlayers = [
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
//# sourceMappingURL=index.js.map