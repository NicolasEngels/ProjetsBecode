var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let now2 = new Date();

rl.question('-- HOW MANY DAYS --\nenter a  year\n' , (year) => {
    if (Number(year) >= 1970 && Number(year) <= 2022){
        rl.question('\nenter a month\n' , (month) => {
            if(Number(month) >= 1 && Number(month) <= 10){
                rl.question('\nenter a day\n' , (day) => {
                    if(Number(day) >= 1 && Number(day) <= 31){
                        let newDate = new Date(`${year}-${month}-${day}`);
                        console.log(Math.floor((now2.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24)) + ` jours complets depuis le ${day}-${month}-${year}`);
                        rl.close();
                    }else{
                        console.log('error - day not valid');
                        rl.close();
                    }
                });
            }else{
                console.log('error - month not valid');
                rl.close();
            }
        });
    }else{
        console.log('error - year not valid');
        rl.close();
    }
});