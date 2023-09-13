// 2.2
let min = prompt('Enter your minimal value', '0');
let max = prompt('Enter your maximum value', '0');
let current = prompt('Enter your current value', '0');
let x = parseInt(min);
let y = parseInt(max);
let z = parseInt(current);
if (x >> y) {
    alert('Tu comprends rien meme le message est passer en français');
} else if (y <= z <= x) {
    alert('Your current value is correct');
} else {
    alert('your current value is incorrect please try again later');
}