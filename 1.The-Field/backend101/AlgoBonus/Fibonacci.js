var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


const fibo = () => {
    rl.question('How many Fibonacci number do you want ? \n', (number) => {
        var previous = 0
        var next = 1
        console.log(0);
        console.log(1);
        for (var i = 0; i < number-2; i++){
            var sum = next + previous
            console.log(sum);
            previous = next;
            next = sum;
        }
        rl.close();
    });
}

fibo();