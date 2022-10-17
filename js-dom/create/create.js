const randomNumber = () => {
    return Math.floor(Math.random() * 255) + 1;
}

const checkColor = (r, g, b) => {
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    if (hsp>127.5) {
        return true;
    } 
    else {
        return false;
    }
}

const students = ['coach diogo', 'coach Thomas', 'andrii', 'anna', 'arsenia', 'audric', 'aurore', 'ben', 'daria', 'edouard', 'egide'];

let shuffledstudents = students.sort(function () {
    return Math.random() - 0.5;
});

for (const student of shuffledstudents){
    const studentDiv = document.createElement("section");
    
    studentDiv.appendChild(document.createTextNode(student));
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    studentDiv.style.backgroundColor = `rgb(${r},${g},${b})`;

    if (!checkColor(r,g,b)){
        studentDiv.style.color = 'white'
    }

    const place = document.getElementById("h2");
    place.insertAdjacentElement("beforeend", studentDiv);
}