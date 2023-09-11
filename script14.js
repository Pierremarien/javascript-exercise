//4.2
/* Math.floor pour les nombres entiers 
Math.random donne un random de nombre décimaux 
(max-min+1))+min
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
function rand10() {
let num = Math.floor(Math.random()*(10-1+1))+1;
alert(num);
}

rand10();