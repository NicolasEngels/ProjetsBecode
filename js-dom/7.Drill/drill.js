const list = document.querySelector("ul").childNodes;


if (list[1].textContent != "Fast and Furious"){
    for (elements in list){
        if(list[elements].textContent == "Fast and Furious"){
            const first = list[1];
            list[elements].textContent = first.textContent;
            list[1].textContent = "Fast and Furious"; 
            list[1].classList.add('important'); 
        }
    }
}


for (const li of list){
    li.addEventListener("click", function() {
        if(li.textContent != "Fast and Furious"){
            alert(li.textContent); 
        }else{
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        }
    });
}


for (var i = 0 ; i<list.length ; i++){
    for(var j = 0 ; j<list.length ; j++){
        if (i != j && list[i].textContent == list[j].textContent){
            list[j].remove();
        }
    }
}


let presortedList = [];

for (film in list){
    if(typeof list[film].textContent === "string" && list[film].textContent != '\n  ' && list[film].textContent != '\n    '){
        presortedList.push([film, list[film].textContent]);
    } 
}

document.body.onkeydown = function(e) {
    if (e.key == "r" || e.code == "KeyR" || e.keyCode == 82) {
        let shuffledlist = presortedList.sort(function () {
            return Math.random()- 0.5;
        });
        
        const listLength = list.length;
        for(var i = 0; i < listLength ; i++){
            list[0].remove();
        }

        if (shuffledlist[0].textContent != "Fast and Furious"){
            for (elements in shuffledlist){
                if(shuffledlist[elements][1] == "Fast and Furious"){
                    const first = shuffledlist[0][1];
                    shuffledlist[elements][1] = first;
                    shuffledlist[0][1] = "Fast and Furious";
                }
            }
        }

        for (const film of shuffledlist){
            const newFilm = document.createElement("li"); 

            newFilm.appendChild(document.createTextNode(film[1]));

            const place = document.querySelector("ul");
            place.appendChild(newFilm);
        }
    }
  }

