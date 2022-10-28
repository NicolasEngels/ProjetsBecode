const button = document.querySelector('button');


fetch('./countries.json')
    .then(response => response.json())
    .then(countries => {
        
        for (const country of Object.keys(countries)){
            const newOption = document.createElement("option");
            newOption.appendChild(document.createTextNode(countries[country])); 
            newOption.value=country;
            document.querySelector("select").appendChild(newOption);
        }
    })
    .catch(error => {
        console.log('There was an error!', error)
    })


button.addEventListener('click', () => {
    const name = document.getElementById('name');
    const country = document.getElementById('country').value;
    const countryName = document.getElementById('country').value.textContent;
    const fetchName = name => fetch('https://api.agify.io/?name='+name+'&country_id='+country);

    fetchName(name.value)
        .then(response => response.json())
        .then(json => {
            const newName = document.createElement('div');
            newName.classList.add("newName");

            const nameValue = document.createElement('h3');
            nameValue.textContent = "How many " + name.value.toUpperCase() + ' in ' + country;
            newName.appendChild(nameValue);

            const nameCount = document.createElement('p');
            nameCount.textContent = `number of person with that name : ${json.count}`;
            newName.appendChild(nameCount);

            const nameAge = document.createElement('p');
            nameAge.textContent = `median age : ${json.age}`;
            newName.appendChild(nameAge);

            document.querySelector("main").appendChild(newName);
        })
        .catch(error => {
            console.log('There was an error!', error)
        })
});
