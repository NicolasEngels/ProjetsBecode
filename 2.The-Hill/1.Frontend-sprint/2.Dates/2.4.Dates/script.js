let normal = true;

const switchB = document.getElementById('hms');
switchB.addEventListener('click', () => {
    normal = !normal;
})


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

    if(normal){
        document.getElementById("hour").innerHTML=hour;
        document.getElementById("second").innerHTML = second;
    }else{
        if (hour > 12){
            hour = hour-12;
            hour = hour < 10 ? "0" + hour : hour;
            second = second+"pm"
        }else{
            second = second+"am"
        }
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("second").innerHTML = second;
    }

    document.getElementById("minute").innerHTML=minute;
    document.getElementById("top").innerHTML=weekday;
    document.getElementById("dateNumber").innerHTML=dateNumber;
    document.getElementById("month").innerHTML=month;
    document.getElementById("bottom").innerHTML=year;
}


setInterval(display, 1000);