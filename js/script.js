let firstNames = [`Emma`, `Liam`, `Sophie`, `Noah`, `Fatima`];
let lastNames = [`Pietersen`, `de Vries`, `Bakker`, `Legrand`, `Er razzouki`];

firstNames.length
lastNames.length

if (firstNames.length !== lastNames.length) {
    console.log(`Het aantal voornamen en achternamen komt niet overeen.`)
}
else {
    for (let index = 0; index < firstNames.length; index++) {
     const firstName = firstNames[index];
     const lastName = lastNames[index];

     console.log(`${firstName} ${lastName}`);
}
}
