"use strict";
class Player {
    constructor(name, age, position) {
        this.score = 0;
        this.name = name;
        this.age = age;
        this.position = position;
    }
    get play() {
        return `${this.name} is playing`;
    }
    scoreGoals(goals) {
        this.score += goals;
    }
    showScore() {
        console.log(`${this.name} has scored ${this.score} goals`);
    }
}
class FamousPlayer extends Player {
    constructor(name, age, position, awards) {
        super(name, age, position);
        this.awards = awards;
    }
    showAwards() {
        console.log(`${this.name} has won:`);
        this.awards.forEach((award) => {
            console.log(`- ${award}`);
        });
    }
    getAwards() {
        return this.awards;
    }
}
const messi = new FamousPlayer('Messi', 34, 'forward', [
    'Galon Ball',
    'Golden Boot',
]);
const ronaldo = new FamousPlayer('Ronaldo', 36, 'forward', [
    'Golden Ball',
    'Golden Boot',
]);
console.log(messi.play);
console.log(ronaldo.play);
messi.showScore();
messi.scoreGoals(2);
messi.scoreGoals(3);
messi.showScore();
const players = [messi, ronaldo];
//# sourceMappingURL=index.js.map