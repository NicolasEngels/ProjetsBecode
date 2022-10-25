var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

const newGame = () => {
    var random = Math.floor(Math.random() * 100) + 1;
    deroulement(random);
}

const deroulement = (random) => {
    rl.question('Entrez un nombre entre 1 et 100 : \n\n', (number) => {
        if (Number(number) > 1 && Number(number) < 100){
            if (Number(number) !== random){
                if (Number(number) < random){
                    console.log('\n--trop petit--\n');
                }else{
                    console.log('\n--trop grand--\n');
                }
                deroulement(random);
            }else{
                console.log('congrats !');
                rl.close();
            }
        }else{
            console.log('\n--not in range--\n');
            deroulement(random);
        }
    });

}
newGame();