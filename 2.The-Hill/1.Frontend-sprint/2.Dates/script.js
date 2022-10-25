//  --  EX1  --  //


// const date = new Date();
// document.write("Brussels : " + date.toLocaleString('en-US',{timeZone: 'Europe/Brussels'}) + "<br/><br/>");
// document.write("Anchorage : " + date.toLocaleString('en-US',{timeZone: 'America/Anchorage'}) + "<br/><br/>");
// document.write("Reykjavik : " + date.toLocaleString('en-US',{timeZone: 'Atlantic/Reykjavik'}) + "<br/><br/>");
// document.write("Saint-Petersburg : " + date.toLocaleString('en-US',{timeZone: 'Europe/Moscow'}));



//  --  EX2  --  //


let now = new Date();
// let myBirthDay = new Date('2000-07-31');

// console.log(Math.floor((now.getTime() - myBirthDay.getTime()) / (1000 * 60 * 60 * 24)) + " jours complets depuis la naissance de Nicolas Engels");

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);

// rl.question('-- HOW MANY DAYS --\nenter a  year\n' , (year) => {
//     if (Number(year) >= 1970 && Number(year) <= 2022){
//         rl.question('\nenter a month\n' , (month) => {
//             if(Number(month) >= 1 && Number(month) <= 10){
//                 rl.question('\nenter a day\n' , (day) => {
//                     if(Number(day) >= 1 && Number(day) <= 31){
//                         let newDate = new Date(`${year}-${month}-${day}`);
//                         console.log(Math.floor((now.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24)) + ` jours complets depuis le ${day}-${month}-${year}`);
//                         rl.close();
//                     }else{
//                         console.log('error - day not valid');
//                         rl.close();
//                     }
//                 });
//             }else{
//                 console.log('error - month not valid');
//                 rl.close();
//             }
//         });
//     }else{
//         console.log('error - year not valid');
//         rl.close();
//     }
// });



//  --  EX3  --  //


// let aLotOfHours = 1000 * 60 * 60 * 80000;
// let turfu = new Date (now.getTime() + aLotOfHours);
// console.log(turfu.toString())



// let numberHour = document.getElementById('numberHour');
// numberHour.addEventListener('keyup', (e) => {
//     const hours = 1000 * 60 * 60 * numberHour.value;

//     let nextDate = new Date (now.getTime() + hours);

//     const display = document.createElement("p");
//     display.style.textAlign = "center";
//     display.innerHTML = nextDate.toString();
//     document.body.appendChild(display);
// })


