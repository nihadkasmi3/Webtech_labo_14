const input = "brood,melk,kaas,appels";
const shoppingList = input.split(",");
shoppingList.length;

console.log(`Je lijst bevat ${shoppingList.length} boodschappen`);

shoppingList.push(`boter`);
shoppingList.unshift(`koffie`);
console.log(shoppingList.join(" | "));
const removedItem = shoppingList.pop();
console.log(`${removedItem} valt weg (laatste boodschap verwijderd)`);

const firstRemovedItem = shoppingList.shift();
console.log(`${firstRemovedItem} hebben we nog in huis(eerste boodschap verwijderd.) `);

const cheeseIndex = shoppingList.indexOf("kaas");
shoppingList[cheeseIndex] = "hummus";
console.log(`Kaas stond op index ${cheeseIndex} en is nu hummus`);


const chipsIndex = shoppingList.indexOf("chips");
if (chipsIndex === -1) {
    console.log("Chips staat niet op de boodschappenlijst.");
}


console.log(shoppingList[10]);

shoppingList.splice(1, 2);
let deletedItems = shoppingList.splice(1, 2);
console.log(`Verwijderde met splice(): ${deletedItems}`);

console.log(`${shoppingList.join("|")}`);