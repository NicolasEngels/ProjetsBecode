//  --  EX1  --  //


// const date = new Date();
// document.write("Brussels : " + date.toLocaleString('en-US',{timeZone: 'Europe/Brussels'}) + "<br/><br/>");
// document.write("Anchorage : " + date.toLocaleString('en-US',{timeZone: 'America/Anchorage'}) + "<br/><br/>");
// document.write("Reykjavik : " + date.toLocaleString('en-US',{timeZone: 'Atlantic/Reykjavik'}) + "<br/><br/>");
// document.write("Saint-Petersburg : " + date.toLocaleString('en-US',{timeZone: 'Europe/Moscow'}));



//  --  EX2  --  //

// let now2 = new Date();
// let myBirthDay = new Date('2000-07-31');

// console.log(Math.floor((now2.getTime() - myBirthDay.getTime()) / (1000 * 60 * 60 * 24)) + " jours complets depuis la naissance de Nicolas Engels");

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);

// rl.question('-- HOW MANY DAYS --\nenter a  year\n' , (year) => {
//     if (Number(year) >= 1970 && Number(year) <= 2022){
//         rl.question('\nenter a month\n' , (month) => {
//             if(Number(month) >= 1 && Number(month) <= 10){
//                 rl.question('\nenter a day\n' , (day) => {
//                     if(Number(day) >= 1 && Number(day) <= 31){
//                         let newDate = new Date(`${year}-${month}-${day}`);
//                         console.log(Math.floor((now2.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24)) + ` jours complets depuis le ${day}-${month}-${year}`);
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

// let now3 = new Date();

// let aLotOfHours = 1000 * 60 * 60 * 80000;
// let turfu = new Date (now3.getTime() + aLotOfHours);
// console.log(turfu.toString())



// let numberHour = document.getElementById('numberHour');
// numberHour.addEventListener('keyup', (e) => {
//     if (e.key>=0 && e.key <=9){
//         const hours = 1000 * 60 * 60 * numberHour.value;

//         let nextDate = new Date (now3.getTime() + hours);

//         const display = document.createElement("p");
//         display.style.textAlign = "center";
//         display.innerHTML = nextDate.toString();
//         document.body.appendChild(display);
//     }
// })



//  --  EX4  --  //

const display = () => {
    let now = new Date();

    let second = now.getSeconds();

    let minute = now.getMinutes();

    let hour = now.getHours();

    let dateNumber = now.getDate();

    let year = now.getFullYear();

    let weekday;
    switch(now.getDay()){
        case 1 :
            weekday = "MON";
            break;
        case 2 :
            weekday = "TUE";
            break;
        case 3 :
            weekday = "WED";
            break;
        case 4 :
            weekday = "THU";
            break;
        case 5 :
            weekday = "DRI";
            break;
        case 6 :
            weekday = "SAT";
            break;
        case 0 :
            weekday = "SUN";
            break;
    }

    let month;
    switch(now.getMonth()){
        case 0 :
            month = "JAN";
            break;
        case 1 :
            month = "FEB";
            break;
        case 2 :
            month = "MAR";
            break;
        case 3 :
            month = "APR";
            break;
        case 4 :
            month = "MAY";
            break;
        case 5 :
            month = "JUN";
            break;
        case 6 :
            month = "JUL";
            break;
        case 7 :
            month = "AUG";
            break;
        case 8 :
            month = "SEP";
            break;
        case 9 :
            month = "OCT";
            break;
        case 10 :
            month = "NOV";
            break;
        case 11 :
            month = "DEC";
            break;
    }

    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;
    dateNumber = dateNumber < 10 ? "0" + dateNumber : dateNumber;

    document.getElementById("second").innerHTML = second;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("top").innerHTML=weekday;
    document.getElementById("dateNumber").innerHTML=dateNumber;
    document.getElementById("month").innerHTML=month;
    document.getElementById("bottom").innerHTML=year;
}

setInterval(display, 1000);
