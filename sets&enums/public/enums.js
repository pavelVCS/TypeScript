"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function turn(direction) {
    console.log(direction);
    if (direction === Direction.Up)
        console.log('Turning up');
    if (direction === Direction.Down)
        console.log('Turning down');
    if (direction === Direction.Left)
        console.log('Turning left');
    if (direction === Direction.Right)
        console.log('Turning right');
}
turn(Direction.Left);
//# sourceMappingURL=enums.js.map