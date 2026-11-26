const grades = [16,12,16,7,17,14,9,8,18,12];
let total = 0;
let failed = 0;

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