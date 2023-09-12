// 4.5

/*
distance entre deux points formule  |p-p'| = sqrt((x-x')^2+(y-y')^2)
*/

function sqr(a) {
    return a*a;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1));
}

let a = prompt("Enter position x", "0");
let b = prompt("Enter position x2", "0");
let c = prompt("Enter position y", "0");
let d = prompt("Enter position y2", "0");
let x1 = parseInt(a);
let x2 = parseInt(b);
let y1 = parseInt(c);
let y2 = parseInt(d);
let result = distance(x1, y1, x2, y2);

alert('the distance is ' + result);