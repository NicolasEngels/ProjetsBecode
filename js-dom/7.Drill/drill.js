let list = document.querySelector("ul").childNodes;


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

for (i in list){
    for(j in list){
        if (i != j && list[i].textContent == list[j].textContent){
            list[j].remove();
        }
    }
}