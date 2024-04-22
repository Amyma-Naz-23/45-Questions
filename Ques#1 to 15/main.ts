//Q#2 Personal Message
let firstName: string="AMYMA";
console.log("Hello" ,firstName, "would you like to learn some Python today?");

//Q#3Name Cases
let secondName:string="amy jak";
console.log(secondName.toLowerCase());
console.log(secondName.toUpperCase());
console.log(secondName.replace(/\b\w/g, (char) => char.toUpperCase()));

//Q#4Famous Quote:
let Famouse:string="Albert Einstein";
console.log(Famouse,"said that",'"A person who never made a mistake never tried anything new."');

//Q#5Famous Quote 2: 
let famousPersonal:string="Albert Einstein";
let quote :string= "Ones Said that,'As a human being one has been endowed with just enough intelligence to be able to see clearly how utterly inadequate that intelligence is when confronted with what exists.'";
console.log(famousPersonal, quote);

//Q#6Stripping Names:
let whiteSpace:string="\n\t AMYMA NAZ\t\n";
console.log(whiteSpace);
let withoutWhiteSpace:string= whiteSpace.trim();
console.log(withoutWhiteSpace); 

//Q#7Number Eight:Arthemic Operations
let num1:number=4;
let num2:number=4;
console.log(num1 + num2);

let
 num3:number=12;
let num4:number=4;
console.log(num3-num4);

let num5:number=4;
let num6:number=2;
console.log(num5*num6);

let num7:number=16;
let num8:number=2;
console.log(num7/num8);

//Q#8 Create four lines
console.log(4+4);
console.log(8-4);
console.log(4*2);
console.log(16/2);

//Q#9Favorite Number: 
let favoriteNum :number=4;
let messg :string="Mine favourite num is:" ;
console.log(messg,favoriteNum);

//Q#10 Adding Comments: 
//console.log(my coment);

//Q#11 Names.
let friendsname=["Areej","Sania","Azhar","Sadaf"];
console.log(friendsname);
friendsname.forEach(frnd =>console.log(frnd));

//Q#12Greetings: 
let newFriend= ["Areej","Sana","Ayat"];
newFriend.forEach(mine => console.log(`Hello ${mine} Where are you yarr!!`));

//Q#13your Own Array:
let transport =["Bike","Car","Reksha","Cycle"];
transport.forEach(modes =>console.log(`I would like to own a ${modes}`));

//Q#14 Guest List:
let guest= ["sania","shazia","areej","maryam"];
guest.forEach(list => console.log(`Would you like to come dinner with my home ${list}`));

//Q#15 remove and add new guest
let guestlist =["sania","shazia","areej","maryam"];
let dontcome = guestlist[0];

guestlist.splice(0 , 1 , "Ayesha");
guestlist.forEach(newguest =>console.log(`Hello ${newguest} would you like to come dinner With me`));
