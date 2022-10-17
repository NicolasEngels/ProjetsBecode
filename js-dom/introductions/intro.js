var h1 = document.getElementById("titre");

h1.textContent = "Modifying the DOM";

document.body.style.backgroundColor = "rgb(67, 235, 200)";

var elems = document.body.getElementsByTagName("*");

for (const i of elems){
    console.log(i);
}

