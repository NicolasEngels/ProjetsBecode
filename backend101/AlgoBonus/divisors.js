var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

const divisors = () => {
    rl.question('divisors of wich number do you want ?\n', (number) => {
        for (var i = 2; i < number ; i++){
            if(number%i === 0){
                console.log(i);
            }
        }
        rl.close();
    });
}

divisors();