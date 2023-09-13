//6.2 et 6.3

class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    positionX() {
       let bottomRightXPos = this.topLeftXPos + this.length;
       return bottomRightXPos;
    }

    positionY() {
        let bottomRightYpos = this.topLeftYPos - this.width;
        return bottomRightYpos;
    } 
    collides(otherRectangle) {
        if (this.topLeftXPos > otherRectangle.positionX() && otherRectangle.topLeftXPos > this.positionX()) {
            return false;
        } 
        if (this.topLeftYPos > otherRectangle.positionY() && otherRectangle.topLeftYPos > this.positionY()) {
            return false;
        } else {
            return true; 
        } 
    }
}

function rand(x){
    return Math.floor(Math.random()*x)+1;
}

let arr = [];
let end = 0;

do {
    let topLeftXPos = rand(100);
    let topLeftYPos = rand(100);
    let width = rand(10);
    let length = rand(20);
    let rectangle = new Rectangle(topLeftXPos, topLeftYPos, width, length)
    arr.push(rectangle);
    end++;
} while (end < 1000);

console.log(arr);
let rect;
let origin = arr[0];
let result = 0;

function check() {
    for (let i = 0; i < arr.length; i++) {
        rect = arr[i];
        if (origin.collides(rect) == false) {
            result++;
        } 
    }
    console.log(result);
}
check();