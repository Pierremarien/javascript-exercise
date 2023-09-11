// 4.1

let x = prompt('Length of your rectangle', '0');
let length = parseInt(x);
let y = prompt('Width of your rectangle', '0');
let width = parseInt(y);

function calcSurface(length, width) {
    alert('the surface is ' + length * width);
}

calcSurface(length, width);