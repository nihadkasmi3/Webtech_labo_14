let numberOfNames = parseInt(prompt('Hoeveel vrienden wil je toevoegen?'));
let friends =[];

for (let index = 0; index < numberOfNames; index++) {
    let names = prompt(`Geef de naam van vriend ${index + 1}:`);   
    friends.push(names);
}
friends.reverse();
console.log(friends);