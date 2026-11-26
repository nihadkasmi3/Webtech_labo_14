const grades = [];
let total = 0;
let failed = 0;
let grade;

do {
 grade = parseInt(prompt(`Geef je punt in: `));
 if (grade !== -1) {
    grades.push(grade);
}
} while (grade !== -1);

for (let grade of grades) {
    total = total + grade;
    if (grade < 10) {
        failed++
    }
}
let average = total / grades.length;
let percentage = (average / 20) * 100;

console.log(`Het gemiddelde: ${average}`);
console.log(`Percentage: ${percentage}`);
console.log(`Aantal gebuisde vakken: ${failed}`);