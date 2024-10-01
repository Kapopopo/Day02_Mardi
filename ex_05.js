let array = ["strawberry" , "strawberry" , "strawberry" ,
"apple" , "apple" ,
"lime" , 
"lime" , "peach" , "pear" ,
"pear"];

function getBasketContent() {
    return array;
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
    const fruits = getBasketContent()
    showMyBasket(fruits)
}
