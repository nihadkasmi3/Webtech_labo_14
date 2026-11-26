let spaghetti = {
    naam: "Spaghetti bolognese",
    beschrijving: "Spaghetti met tomatensaus en gehakt",
    personen: 4,
    ingredienten: [
        { naam: "Spaghetti", hoeveelheid: "400 gram", prijs: 2.50 },
        { naam: "Gehakt", hoeveelheid: "300 gram", prijs: 5.00 },
        { naam: "Tomatensaus", hoeveelheid: "1 pot", prijs: 2.00 },
        { naam: "Ui", hoeveelheid: "1 stuk", prijs: 0.50 }
    ]
};

let total = 0;

for (let index = 0; index < spaghetti.ingredienten.length; index++) {
    total = total + spaghetti.ingredienten[index].prijs;
}
console.log(`${spaghetti.naam}`);
console.log(`Totaal prijs van de ingrediënten: ${total.toFixed(2)}`);