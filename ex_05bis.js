let array = [
  "strawberry",
  "strawberry",
  "strawberry",
  "apple",
  "apple",
  "lime",
  "lime",
  "peach",
  "pear",
  "pear",
]

function getBasketContent(fruits) {
  let basket = array
  if (fruits > basket.length) {
    console.log("Too many fruit(s) selected")
    return;
  } else {
  console.log(fruits + " fruit(s) selected")
  return basket.splice(0, fruits);
  }
}
const all = getBasketContent(4);
showMyBasket(all);
