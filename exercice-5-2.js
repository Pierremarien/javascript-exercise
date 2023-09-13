// 5.2
/*
*/


function askTvSerie() {
    let serie = prompt('Enter your serie name');
    let date = prompt('Enter the production year of your serie');
    let cast = prompt('Enter names of cast members sepatate them with a comma').split(',');
    let TvSerie = {
        Name: serie,
        'Production Year': date,
        Cast: cast,
    }
    function randomizeCast(TvSerie) {
        for (let i = cast.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cast[i], cast[j]] = [cast[j], cast[i]]; 
          }
          return TvSerie
        }
    let newcast = randomizeCast(TvSerie);

    var str = JSON.stringify(newcast, null, 4); 
    console.log(str);
    }
    
    askTvSerie();

