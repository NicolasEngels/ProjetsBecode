//  --  EX1  -- //

// let interval;
// let index = 0;
// let word = "Prout";

// const displayWord = () => {
//     if(index == word.length){
//         clearInterval(interval);
//     }else{
//         document.write(word.charAt(index));
//         index++;
//     }
// }

// interval = setInterval(displayWord, 400);


//  --  EX2  -- //

// let time = 1;

// const displayTime = () => {
//     if (time===1){
//         document.write(time + " seconde depuis le lancement de la page"); 
//     }else if (time < 60){
//         document.write(time + " secondes depuis le lancement de la page"); 
//     }else{
//         document.write(Math.floor(time/60) + " minutes et " + time%60 + " depuis le debut du lancement de la page"); 
//     }
//     document.write("<br/>");
//     time++;
// }

// setInterval(displayTime, 1000);


//  --  EX3  -- //


const plateau = document.createElement("div");
plateau.style.border='solid 2px black';
plateau.style.width='600px';
plateau.style.height='450px';
plateau.style.margin = "auto";
plateau.style.display = "flex";
plateau.style.justifyContent = "space-around";
plateau.style.alignContent = "space-around";
plateau.style.flexWrap = "wrap";
document.body.appendChild(plateau);

for (let i = 0 ; i < 12 ; i++){
    const cercle = document.createElement("button");
    cercle.style.border = 'solid 2px black';
    cercle.style.width = "140px";
    cercle.style.height = "140px";
    cercle.style.borderRadius = "50%";
    cercle.style.cursor = "pointer";
    cercle.style.backgroundColor = "grey";
    plateau.appendChild(cercle);
} 

const circleList = document.querySelectorAll('button');

let points = 0;
const compteur = document.createElement("p");
compteur.style.textAlign = "center";
compteur.innerHTML = "points : " + points++;
document.body.appendChild(compteur);

circleList[0].style.backgroundColor = "red";

circleList.forEach((circle) => {
    circle.addEventListener('click', () => {
        if (circle.style.backgroundColor === "red"){
            circle.style.backgroundColor = 'grey';
            circleList[Math.floor(Math.random()*12)].style.backgroundColor = "red";
            compteur.innerHTML = "points : " + points++;
        }
    })
})



