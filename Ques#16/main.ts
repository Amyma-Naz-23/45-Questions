//#Ques 17 More Guest 
let guestlist = ["Sania","Amyma","Areej","tariya"];
 let dontCome =[0];
 
 guestlist.splice(0, 1, "ayesha");

 console.log("NOow we have a bigger Table");
//Adding a new guest at starting index of array
 guestlist.unshift("Sadaf");
//Adding a guest at ending index of array
guestlist.push("Shazia");

//Adding a guest at Middle index of array

let middleIndex :number =Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Shiza");

console.log("Update guEST list");

guestlist.forEach(update => console.log(`Hello ${update}, Would you like to dinner WITH me`));

