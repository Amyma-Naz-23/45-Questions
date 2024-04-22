//Ques # function to use parameter that accept issue arrgument repesting our same
function maKeSandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwish with the following items:");
    items.forEach(function (oneItem) { return console.log(oneItem); });
    console.log("Now Enjoy Delecious Sandwish");
}
console.log("\n\t");
maKeSandwish("beef", "Cheese", "Butter", "Mayo", "salled");
console.log("\n\t");
maKeSandwish("bread ", "Egg", "Mayo");
console.log("\n\t");
maKeSandwish("beef", "Cheese", "Butter", "Mayo", "salled", "Tomato", "Ginger", "bread ", "chicken");
