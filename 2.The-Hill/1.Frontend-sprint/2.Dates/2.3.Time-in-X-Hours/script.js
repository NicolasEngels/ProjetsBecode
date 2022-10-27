let now3 = new Date();

let aLotOfHours = 1000 * 60 * 60 * 80000;
let turfu = new Date (now3.getTime() + aLotOfHours);
console.log(turfu.toString())



let numberHour = document.getElementById('numberHour');
numberHour.addEventListener('keyup', (e) => {
    if (e.key>=0 && e.key <=9){
        const hours = 1000 * 60 * 60 * numberHour.value;

        let nextDate = new Date (now3.getTime() + hours);

        const display = document.createElement("p");
        display.style.textAlign = "center";
        display.innerHTML = nextDate.toString();
        document.body.appendChild(display);
    }
})