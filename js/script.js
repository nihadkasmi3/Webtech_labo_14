let spreadsheet = [
    [100, 104, 105],
    [144, 110, 109],
    [105, 107, 111]
];

let sumRow1 = spreadsheet[0][0] + spreadsheet[0][1] + spreadsheet[0][2];
console.log(sumRow1);

let sumRow2 = spreadsheet[1][0] + spreadsheet[1][1] + spreadsheet[1][2];
console.log(sumRow2);

let sumRow3 = spreadsheet[2][0] + spreadsheet[2][1] + spreadsheet[2][2];
console.log(sumRow3);

let total = 0;

for (let row = 0; row < spreadsheet.length; row++) {
    for (let column = 0; column < spreadsheet[row].length; column++) {
        total = total + spreadsheet[row][column];
    }
}

console.log(`Som van de elementen in rij 1: ${sumRow1}`);
console.log(`Som van de elementen in rij 2: ${sumRow2}`);
console.log(`Som van de elementen in rij 3: ${sumRow3}`);

console.log(`Totaal van de hele tabel: ${total}`);