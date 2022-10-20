let list = document.querySelector("ul").childNodes;


if (list[1].textContent != "Fast and Furious"){
    for (elements in list){
        if(list[elements].textContent == "Fast and Furious"){
            const first = list[1];
            list[elements].textContent = first.textContent;
            list[1].textContent = "Fast and Furious";  
        }
    }
}