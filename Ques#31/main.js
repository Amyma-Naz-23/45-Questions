//Ques#31
var name_user = ["Ali", "Wasi", "Unsa", "Mehwish", "Rabia"];
if (name_user.length === 0) {
    console.log("Your Array in Empty We need to find some user!");
}
name_user.forEach(function (myName) {
    if (myName === "unsa") {
        console.log("Hello ".concat(myName, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(myName, ", thank you for loging again"));
    }
});
