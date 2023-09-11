//4.4


let inputArr = ["Alexandre va", "Alexandre ve", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth", "Elodie", "Justin", "Justine F", "Justine L", "Kimi", "Layla", "Lidwine", "Lucas", "Mathias", "Okly", "Pierre", "Robin", "Rosalie", "Stephane", "Tim", "Tom", "Valentin", "Virginie"];

function number() {
    for(let i = 1; i < inputArr.length; i++) {
        let n = 1;
        n++;
        return n;
    }
}

let n = number();
let arr = [];

function pickLearner(inputArr, n) {
    let learner = arr[(Math.floor(Math.random() * inputArr.length))];
    arr.push(n*learner);
    console.log(arr);
}

pickLearner(inputArr, n);