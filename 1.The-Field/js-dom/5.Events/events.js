const randomNumber = () => {
  return Math.floor(Math.random() * 255) + 1;
}

const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

var displayList = [];

const clickOnSquare = (e) => {
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare");
  newSquare.classList.add(e.target.classList[1]);

  const place = document.querySelector(".displayedsquare-wrapper");
  place.appendChild(newSquare);

  const time = document.createElement("li");
  time.innerText = getElapsedTime() + ` Created a new ${e.target.classList[1]} square`;

  const secondPlace = document.querySelector("ul");
  secondPlace.appendChild(time);
}

const clickOnDisplay = (e) => {
  console.log("hey");
  alert(e.target.classList[1]);
}


const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }else if(e.key == "l" || e.code == "KeyL" || e.keyCode == 76){
    const section = document.querySelector('section');

    const sectionSize = section.children.length;

    if(sectionSize>0){
      section.children[sectionSize-1].remove();
    }
  }
}

