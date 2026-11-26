fetch("person.json")
    .then(response => response.json())
    .then(person => {
        console.log(`${person.firstname} ${person.lastname}`);

        for (let index = 0; index < person.hobbies.length; index++) {
            console.log(person.hobbies[index]);
        }
    });
