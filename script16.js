//4.4
/*
we generate a random n number first to get the final number of learners
then in the function picklearner we use the Fisher–Yates shuffle Algorithm
to pick our random learners. https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
we just create a random order in our array and then we slice it at size n.
*/

let inputArr = ["Alexandre va", "Alexandre ve", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth", "Elodie", "Justin", "Justine F", "Justine L", "Kimi", "Layla", "Lidwine", "Lucas", "Mathias", "Okly", "Pierre", "Robin", "Rosalie", "Stephane", "Tim", "Tom", "Valentin", "Virginie"];

function number() {
let num = Math.floor(Math.random()*(26-1+1))+1;
return num;
}

let n = number();

function pickLearner(inputArr, n) {
  for (let i = inputArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]]; 
  }
    
    askTvSerie();
    return inputArr.slice(0, n);
  }

let learner = pickLearner(inputArr, n);

console.log(learner);