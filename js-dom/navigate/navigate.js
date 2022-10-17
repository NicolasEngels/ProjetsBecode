const ol = document.querySelector('ol');

const olSize = ol.children.length;

for (var i = 0 ; i < olSize-1 ; i++){
    ol.appendChild(ol.children[0]);
}


const section = document.querySelectorAll('section');

const titleSecondSection = section[2].children[0].children[0].textContent;

section[2].children[0].children[0].textContent = section[1].children[0].textContent;

section[1].children[0].textContent = titleSecondSection;

section[2].style.display = "none";
