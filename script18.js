//4.6
/*
factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
factorial of n (n!) = 1 * 2 * 3 * 4.....n
*/

function factorial(a) {

   
    if (a == 0) {
        return 1;
    }

    else {
        return a * factorial(a - 1);
    }
}


const num = prompt('Enter a positive number: ');

if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}