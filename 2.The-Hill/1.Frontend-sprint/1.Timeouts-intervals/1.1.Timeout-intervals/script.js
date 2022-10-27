let interval;
let index = 0;
let word = "Prout";

const displayWord = () => {
    if(index == word.length){
        clearInterval(interval);
    }else{
        document.write(word.charAt(index));
        index++;
    }
}

interval = setInterval(displayWord, 1000);