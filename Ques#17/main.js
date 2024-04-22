//Ques # 44
//#Ques 17 More Guest 
var guestlist = ["Sania", "Amyma", "Areej", "tariya"];
var dontCome = [0];
guestlist.splice(0, 1, "ayesha");
console.log("NOow we have a bigger Table");
//Adding a new guest at starting index of array
guestlist.unshift("Sadaf");
//Adding a guest at ending index of array
guestlist.push("Shazia");
//Adding a guest at Middle index of array
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Shiza");
console.log("Update guEST list");
guestlist.forEach(function (update) { return console.log("Hello ".concat(update, ", Would you like to dinner WITH me")); });
console.log("Two New Guest Arrive now");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " my new guest arrive so you will not come"));
}
console.log("Inviting last 2 guest");
guestlist.forEach(function (newguest) { return console.log("you Are invited".concat(newguest)); });
guestlist.pop();
guestlist.pop();
console.log("My last list is empty", guestlist);
