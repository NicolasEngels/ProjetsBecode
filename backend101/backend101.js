//Variable

const sum = (a, b) => {
    return a + b;
}

const division = (a, b) => {
    return a / b;
}

const modulo = () => {
    var numerateur = prompt("Saisissez le numérateur :", 0);
    var denominateur = prompt("Saisissez le dénominateur :", 1);
    return numerateur % denominateur;
}

const VAT = (a) => {
    return a * 1.21;
}

const surfaceCercle = (radius) => {
    return Math.PI * (radius * radius);
}

const whatSecondIsIt = () => {
    var hour = new Date().getHours() * 3600;
    var minute = new Date().getMinutes() * 60;
    var second = new Date().getSeconds();
    return hour + minute + second;
}

//Conditions

const cinema = () => {
    var age = prompt("quel est votre age ?", "vous n'avez rien rentré");
    if(age <= 25){
        return "tarif jeune : 8€";
    }else{
        return "tarif adulte : 10€";
    }
}

const maximum = (a, b, c) => {
    if( a >= b && a >= c ){
        return a;
    }else if( b >= a && b >= c ){
        return b;
    }else{
        return c;
    }
}

const identicalDice = () => {
    var d1 = Math.floor(Math.random() * 6) + 1;
    console.log("dé 1 : " + d1);
    var d2 = Math.floor(Math.random() * 6) + 1;
    console.log("dé 2 : " + d2);
    var d3 = Math.floor(Math.random() * 6) + 1;
    console.log("dé 3 : " + d3);

    if(d1 === d2 && d1 === d3){
        return "three";
    }else if(d1 === d2 || d1 === d3 || d3 === d2){
        return "two";
    }else{
        return "none";
    }
}

const dayNumber = (n) => {
    switch(n){
        case 1 :
            return "Monday";
            break;
        case 2 :
            return "Tuesday";
            break;
        case 3 :
            return "Wednesday";
            break;
        case 4 :
            return "Thursday";
            break;
        case 5 :
            return "Friday";
            break;
        case 6 :
            return "Saturday";
            break;
        case 7 :
            return "Sunday";
            break;
    }
}

const printShop = (n) => {
    if (n <= 10){
        return "total à payer : " + n * 0.12 + "€";
    }else if (n <= 30){
        var reste = n - 10;
        var restePaid = reste * 0.11;
        return "total à payer : " + (restePaid + 1.2) + "€";
    }else{
        var reste = n - 30;
        var restePaid = reste * 0.1;
        return "total à payer : " + (restePaid + 3.4) + "€";
    }
}

//loops

const oneToN = (n) => {
    for (var i = 1; i<=n; i++){
        console.log(i);
    }
}

const nToOne = (n) => {
    for (n; n>=1; n--){
        console.log(n);
    }
}

const minusNToN = (n) => {
    for (var minus = -n ; minus <= n; minus++){
        console.log(minus);
    }
}

const oddNumberToN = (n) => {
    for (var i = 1; i <= n; i = i+2){
        console.log(i);
    }
}

const fromZeroToRando = () => {
    var n = prompt("donnez un chiffre : ", 10);
    if (n>=0){
        for (var i = 1; i<=n; i++){
            console.log(i);
        }
    }else{
        for (var i = 1; i>=n; i--){
            console.log(i);
        }
    }
    
}

const throwDices = (n) => {
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    for (n ; n>=1; n--){
        var valDice = Math.floor(Math.random() * 6) + 1;

        switch (valDice){
            case 1 :
                one++;
                console.log(valDice);
                break;
            case 2 :
                two++;
                console.log(valDice);
                break;
            case 3 :
                three++;
                console.log(valDice);
                break;
            case 4 :
                four++;
                console.log(valDice);
                break;
            case 5 :
                five++;
                console.log(valDice);
                break;
            case 6 :
                six++;
                console.log(valDice);
                break;
        }
    }
    console.log("nombre de 1 : " + one);
    console.log("nombre de 2 : " + two);
    console.log("nombre de 3 : " + three);
    console.log("nombre de 4 : " + four);
    console.log("nombre de 5 : " + five);
    console.log("nombre de 6 : " + six);
}

const perfectNumber = (n) => {
    var sum = 0;
    for (var i = 1 ; i < n ; i++){
        if (n % i === 0){
            sum = sum + i;
        }
    }
    if (sum === n){
        return "le nombre " + n + " est parfait"
    }else{
        return "le nombre " + n + " n'est pas parfait"
    }
}

//arrays

const everything = (n) => {
    for (m in n){
        console.log(n[m]);
    }
}

const maxInArray = (n) => {
    var max = n[0];
    for (m in n){
        if (n[m] >= max){
            max = n[m];
        }
    }
    return max;
}

const minInArray = (n) => {
    var min = n[0];
    for (m in n){
        if (n[m] <= min){
            min = n[m];
        }
    }
    return min;
}

const minPosInArray = (n) => {
    var min = n[0];
    for (m in n){
        if (n[m] <= min){
            min = n[m];
        }
    }
    return n.indexOf(min);
}

const ordered = (n) => {
    for (var i = 0; i < n.length; i++){
        if (n[i] > n[i+1]){
            return "array désordonné";
        }
    }
    return "array ordonné";
}

//strings

const lowerCase = (n) => {
    return n.toLowerCase();
}

const upperCase = (n) => {
    return n.toUpperCase();
}

const convertName = (n) => {
    var final = "";
    var prenom = n.indexOf(",") + 2;
    for (prenom ; prenom <= n.length; prenom++){
        final = final + n.charAt(prenom);
    }

    final = final + " ";

    for(var i = 0; i < n.indexOf(","); i++){
        final = final + n.charAt(i);
    }

    return final
}

const removeSpace = (n) => {
    return n.replace(/\s/g, '');
}