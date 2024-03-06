enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function turn(direction: Direction) {
  console.log(direction);

  if (direction === Direction.Up) console.log('Turning up');
  if (direction === Direction.Down) console.log('Turning down');
  if (direction === Direction.Left) console.log('Turning left');
  if (direction === Direction.Right) console.log('Turning right');
}

turn(Direction.Left);
