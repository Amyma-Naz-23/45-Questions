//Ques # function to use parameter that accept issue arrgument repesting our same
function maKeSandwish(...items: string[]){
    console.log("Making a sandwish with the following items:")

    items.forEach(oneItem => console.log(oneItem));

    console.log("Now Enjoy Delecious Sandwish");

}
console.log("\n\t");
maKeSandwish("beef", "Cheese", "Butter", "Mayo" , "salled");
console.log("\n\t");
maKeSandwish("bread ", "Egg" ,"Mayo")
console.log("\n\t");
maKeSandwish("beef", "Cheese", "Butter", "Mayo" , "salled", "Tomato", "Ginger","bread ","chicken");
