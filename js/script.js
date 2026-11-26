import animalData from "dieren.json" with { type: "json" };

function getAnimalsList(animals) {
    let animalNames = [];

    for (let index = 0; index < animals.length; index++) {
        animalNames.push(animals[index].naam);
    }

    return animalNames;
}

let animalNames = getAnimalsList(animalData);

for (let index = 0; index < animalNames.length; index++) {
    console.log(`${index + 1}. ${animalNames[index]}`);
}

let choice = parseInt(prompt(`Kies een dier (1-${animalNames.length}): `));

let chosenAnimal = animalData[choice - 1];

console.log(chosenAnimal);
