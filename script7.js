//2.6
function whichDay() {
    var day = prompt('Choose a number', '0');
if (day == '1') {
    alert('It is monday');
} else if (day == '2') {
    alert('It is tuesday');
} else if (day == '3') {
    alert('It is wednesday my dood');
} else if (day == '4') {
    alert('It is thursday');
} else if (day == '5') {
    alert('It is friday');
} else if (day == '6') {
    alert('It is saturday');
} else if (day == '7') {
    alert('It is sunday');
} else {
    alert('are you sure');
    whichDay();
}
}
whichDay();
