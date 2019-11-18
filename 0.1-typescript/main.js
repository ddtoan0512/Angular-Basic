// let a: string;
// let b: number;
// let c: boolean;
// let d: any;
// let e: string[] = ['a', 'b', 'c'];
// let f: null;
// let g: undefined;
// let h: void;
// enum Color{
//     Red,   
//     Green,
//     Blue
// }
// let red = Color.Red;
// TypeAssertion
// let a: string[] = [];
// a.push('new string');
// console.log({a});
//Cast
// (<string[]>a)
// (a as string[]).
// Interface
// Access Modifiers: Public, Private, Protected
// Getters, Setters
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log("Drawa point at X: " + this._x + " and Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 3);
console.log("X is " + point.x);
point.x = 5;
point.drawPoint();
