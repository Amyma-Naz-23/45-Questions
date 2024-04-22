//Ques#32 Array for Current User
var currentuser = ["sana", "ali", "rabia", "sania"];
//Array for new user
var newusers = ["amir", "ali", "fatima", "Sania"];
newusers.forEach(function (new_one_user) {
    var ourcondition = currentuser.some(function (currentuser) { return currentuser.toLowerCase() === new_one_user.toLowerCase(); });
    if (ourcondition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
