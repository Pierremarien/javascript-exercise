// 6.1
/*
*/
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos= yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
        console.log(this.xPos, this.yPos, this.radius);    
    }
    get surface() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(1, 1, 3);

console.log(circle);

