const button = document.querySelector('button');

button.addEventListener('click', () => {
    fetch('./becode.json')
    .then(response => response.json())
    .then(rules => {
        const ul = document.createElement('ul');
        for (const rule of rules){
            const li = document.createElement('li');
            li.textContent = rule;
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    })
    .catch(error => {
        console.log('There was an error!', error)
    })
});

