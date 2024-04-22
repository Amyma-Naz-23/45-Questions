//Ques#33  Creating Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//using For-loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var myNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (myNumber === 1) {
        ordinalEnding = "st";
    }
    else if (myNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (myNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(myNumber).concat(ordinalEnding));
}
