//Q#2 Personal Message
var firstName = "AMYMA";
console.log("Hello", firstName, "would you like to learn some Python today?");
//Q#3Name Cases
var secondName = "amy jak";
console.log(secondName.toLowerCase());
console.log(secondName.toUpperCase());
console.log(secondName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
//Q#4Famous Quote:
var Famouse = "Albert Einstein";
console.log(Famouse, "said that", '"A person who never made a mistake never tried anything new."');
//Q#5Famous Quote 2: 
var famousPersonal = "Albert Einstein";
var quote = "Ones Said that,'As a human being one has been endowed with just enough intelligence to be able to see clearly how utterly inadequate that intelligence is when confronted with what exists.'";
console.log(famousPersonal, quote);
//Q#6Stripping Names:
var whiteSpace = "\n\t AMYMA NAZ\t\n";
console.log(whiteSpace);
var withoutWhiteSpace = whiteSpace.trim();
console.log(withoutWhiteSpace);
//Q#7Number Eight:Arthemic Operations
var num1 = 4;
var num2 = 4;
console.log(num1 + num2);
var num3 = 12;
var num4 = 4;
console.log(num3 - num4);
var num5 = 4;
var num6 = 2;
console.log(num5 * num6);
var num7 = 16;
var num8 = 2;
console.log(num7 / num8);
//Q#8 Create four lines
console.log(4 + 4);
console.log(8 - 4);
console.log(4 * 2);
console.log(16 / 2);
//Q#9Favorite Number: 
var favoriteNum = 4;
var messg = "Mine favourite num is:";
console.log(messg, favoriteNum);
//Q#10 Adding Comments: 
//console.log(my coment);
//Q#11 Names.
var friendsname = ["Areej", "Sania", "Azhar", "Sadaf"];
console.log(friendsname);
friendsname.forEach(function (frnd) { return console.log(frnd); });
//Q#12Greetings: 
var newFriend = ["Areej", "Sana", "Ayat"];
newFriend.forEach(function (mine) { return console.log("Hello ".concat(mine, " Where are you yarr!!")); });
//Q#13your Own Array:
var transport = ["Bike", "Car", "Reksha", "Cycle"];
transport.forEach(function (modes) { return console.log("I would like to own a ".concat(modes)); });
//Q#14 Guest List:
var guest = ["sania", "shazia", "areej", "maryam"];
guest.forEach(function (list) { return console.log("Would you like to come dinner with my home ".concat(list)); });
//Q#15 remove and add new guest
var guestlist = ["sania", "shazia", "areej", "maryam"];
var dontcome = guestlist[0];
guestlist.splice(0, 1, "Ayesha");
guestlist.forEach(function (newguest) { return console.log("Hello ".concat(newguest, " would you like to come dinner With me")); });
