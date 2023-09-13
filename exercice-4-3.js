// 4.3
/*
we create an empty array then we ask our user for the length of the
array we'll use.
in multiRand we create a for loop between 0 and the length chosen by our user 
in this for loop we create a variable to capture the value of rand10 function in each itteration
of our loop and we push the result in our array as well
we then display our generated array in an array
*/


let arr = [];

let x = prompt('Enter how many numbers you want to generate', '0');
let length = parseInt(x);

function rand10() {
    let num = Math.floor(Math.random()*(10-1+1))+1;
    return num;
    }
    
function multiRand() {
    for (let i = 0; i < length; i++) {
    let rand = rand10();
    arr.push(rand);
    }
    alert(arr);
}

multiRand();