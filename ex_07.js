fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

let pos = 5;

function getFruitNameFromIndex(pos)
{
    if (pos === -1) {
        return fruits(fruits.length - 1);
    }
    if (pos < 0 || pos >= fruits.length) {
        return null;
    } else {
      return fruits[pos];
    }
}
displayResult(getFruitNameFromIndex(pos));
