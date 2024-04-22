//Ques#37 
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with  ").concat(printMessage, " print on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Also Love Javascript");
