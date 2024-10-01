fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]

let pos =  "Kiwi"

function getIndexFromName(pos) {
    let index = fruits.indexOf(pos);
    
    if (index === -1) {
	return null;
    } else {
	return index;
    }
}

function display(final) {
    displayResult(final);
}
display(getIndexFromName(pos));
