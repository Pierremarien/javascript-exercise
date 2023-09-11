//3.2
let arr = [1, 2, 3, 4, 5]
let numarr = [100, 101, 102]

function average(array) {
var sum = 0;
var count = 0;

array.forEach(item =>{
    sum += item;
    count++;
});

return sum/count;
}
console.log(average(arr));
console.log(average(numarr));