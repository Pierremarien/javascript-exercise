// 5.1
/*
*/
function askTvSerie() {
let serie = prompt('Enter your serie name');
let date = prompt('Enter the production year of your serie');
let cast = prompt('Enter names of cast members sepatate them with a comma').split(',');
let object = {
    Name: serie,
    'Production Year': date,
    'Cast Names': cast,
}
var str = JSON.stringify(object, null, 4); 
console.log(str);
}

askTvSerie();