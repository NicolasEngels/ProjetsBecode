const randomNumber = () => {
    return Math.floor(Math.random() * 255) + 1;
}

const importants = document.querySelectorAll('.important');

for (i in importants){
    importants[i].title = "This is an important item";
    console.log(importants[i]);
}

const allImg = document.querySelectorAll('img');

for (const img of allImg){
    if (!img.classList.contains('important')){
        img.style.display = 'none';
    }
}

const allP = document.querySelectorAll('p');

for (const p of allP){
    if (p.classList.length > 0){
        console.log(p.className);
        console.log(p.innerHTML);
    }else{
        p.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    }   
}