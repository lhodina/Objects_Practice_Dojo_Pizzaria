function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaUno = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log('pizzaUno :', pizzaUno);

var pizzaDue = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log('pizzaDue :', pizzaDue);

var pizzaTre = pizzaOven("wonder bread", "ketchup", ["Cheez Wiz", "powder from Kraft mac 'n' cheese"], ["hotdog slices", "Skittles"]);
console.log('pizzaTre :', pizzaTre);

var pizzaQuattro = pizzaOven("New Haven", "olive oil", ["pecorino"], ["littleneck clams", "gah-lic", "oregano"]);
console.log('pizzaQuattro :', pizzaQuattro);


function randomPizza() {
    var crusts = ["deep dish", "hand tossed", "wonder bread", "New Haven", "cheese stuffed", "New York thin", "Neapolitan"];
    var sauces = ["traditional", "marinara", "ketchup", "olive oil", "white wine", "vodka", "kitchen sweat"];
    var cheeses = ["mozzarella", "feta", "Cheez Wiz", "powder from Kraft mac 'n' cheese", "pecorino", "Kraft singles American", "parmesan", "gouda"];
    var toppings = ["pepperoni", "sausage", "olives", "onions", "hotdog slices", "Skittles", "anchovies", "eel", "squid", "wasabi", "gah-lic", "oregano", "Twix", "Oreo", "peanuts", "seaweed", "salmon", "mustard", "mayonnaise", "cat hair", "dog biscuit", "strawberry jam", "fillet mignon"];
    var crustIndex = Math.floor(Math.random() * crusts.length);

    var sauceIndex = Math.floor(Math.random() * sauces.length);
    var cheeseIndex = Math.floor(Math.random() * cheeses.length);
    var toppingIndex = Math.floor(Math.random() * toppings.length);
    var topping2 = Math.floor(Math.random() * toppings.length);
    while (topping2 === toppingIndex) {
        topping2 = Math.floor(Math.random() * toppings.length);
    }

    var toppings = [ toppings[toppingIndex], toppings[topping2] ];
    return pizzaOven(crusts[crustIndex], sauces[sauceIndex], cheeses[cheeseIndex], toppings);
}

console.log("pizzaArandommozzo:", randomPizza());
