let firstName = document.getElementById('firstname');

firstName.addEventListener('keydown', (e) => {
    const display = document.createElement("span");
    display.appendChild(document.createTextNode(e.key));

    const displayName = document.getElementById("display-firstname");
    displayName.appendChild(display);
});



let age = document.getElementById('age');

age.addEventListener('keydown', (e) => {
    if (age.value >= 18){
        document.getElementById("a-hard-truth").style.visibility = "visible";
    }else {
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    }
});



let password = document.getElementById('pwd');
let passwordConfirm = document.getElementById('pwd-confirm');

passwordConfirm.addEventListener('keyup', (e) => {
    if(password.value.length >= 6 && passwordConfirm.value.length >= 6){
        if(password.value.toString() == passwordConfirm.value.toString()){
            password.style.border = "solid 2px green";
            passwordConfirm.style.border = "solid 2px green";
        }else{
            password.style.border = "solid 2px red";
            passwordConfirm.style.border = "solid 2px red";
        }
    }else{
        password.style.border = "solid 2px red";
        passwordConfirm.style.border = "solid 2px red";
    }
});



let mode = document.getElementById('toggle-darkmode');

mode.addEventListener('change', (e) => {
    var mode = e.target.value;
    if (mode == "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else if (mode == "light"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})