let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

let team = [];

for (let index = 0; index < pokemon.length; index++) {
    console.log(`${index + 1}. ${pokemon[index]}`);
}

let choice;

do {
    choice = prompt(`Welke pokemon wil je in je team? [1-${pokemon.length}] (STOP om te stoppen): `);

    if (choice !== "STOP") {
        choice = parseInt(choice);

        if (choice < 1 || choice > pokemon.length) {
            console.log("Deze pokemon ken ik niet");
        } else {
            let chosenPokemon = pokemon[choice - 1];

            let pokemonIndex = team.indexOf(chosenPokemon);

            if (pokemonIndex !== -1) {
                console.log("Deze pokemon zit al in je team");
            } else {
                team.push(chosenPokemon);
            }
        }
    }

} while (choice !== "STOP");

console.log("Je gekozen pokemon zijn:");

for (let index = 0; index < team.length; index++) {
    console.log(`${index + 1}. ${team[index]}`);
}