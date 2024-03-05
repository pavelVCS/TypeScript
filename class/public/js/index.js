"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Player = (function () {
    function Player(name, age, position) {
        this.score = 0;
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Object.defineProperty(Player.prototype, "play", {
        get: function () {
            return "".concat(this.name, " is playing. His age is ").concat(this.age, " and his position is ").concat(this.position);
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.scoreGoals = function (goals) {
        this.score += goals;
    };
    Player.prototype.showScore = function () {
        console.log("".concat(this.name, " has scored ").concat(this.score, " goals"));
    };
    return Player;
}());
var FamousPlayer = (function (_super) {
    __extends(FamousPlayer, _super);
    function FamousPlayer(name, age, position, awards) {
        var _this = _super.call(this, name, age, position) || this;
        _this.awards = awards;
        return _this;
    }
    FamousPlayer.prototype.showAwards = function () {
        console.log("".concat(this.name, " has won:"));
        this.awards.forEach(function (award) {
            console.log("- ".concat(award));
        });
    };
    FamousPlayer.prototype.getAwards = function () {
        return this.awards;
    };
    return FamousPlayer;
}(Player));
var messi = new FamousPlayer('Messi', 34, 'forward', [
    'Galon Ball',
    'Golden Boot',
]);
var ronaldo = new FamousPlayer('Ronaldo', 36, 'forward', [
    'Golden Ball',
    'Golden Boot',
]);
console.log(messi.play);
console.log(ronaldo.play);
messi.showScore();
messi.scoreGoals(2);
messi.scoreGoals(3);
messi.showScore();
//# sourceMappingURL=index.js.map