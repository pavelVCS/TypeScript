type Position = 'forward' | 'midfield' | 'defender' | 'goalkeeper';

abstract class Player {
  constructor(name: string, age: number, position: Position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  name: string;
  private age: number;
  position: Position;
  score: number = 0;

  get play(): string {
    return `${this.name} is playing`;
  }

  scoreGoals(goals: number): void {
    this.score += goals;
  }

  showScore(): void {
    console.log(`${this.name} has scored ${this.score} goals`);
  }
}

interface GetAwards {
  awards: string[];
  getAwards(): string[];
}

class FamousPlayer extends Player implements GetAwards {
  constructor(name: string, age: number, position: Position, awards: string[]) {
    super(name, age, position);
    this.awards = awards;
  }
  awards;

  showAwards(): void {
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

const players: Player[] = [messi, ronaldo];
