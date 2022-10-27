let time = 1;

const displayTime = () => {
    if (time===1){
        document.write(time + " seconde depuis le lancement de la page"); 
    }else if (time < 60){
        document.write(time + " secondes depuis le lancement de la page"); 
    }else{
        document.write(Math.floor(time/60) + " minutes et " + time%60 + " depuis le debut du lancement de la page"); 
    }
    document.write("<br/>");
    time++;
}

setInterval(displayTime, 1000);