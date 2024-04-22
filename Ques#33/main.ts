//Ques#33  Creating Array
let numbers = [1 ,2 , 3 ,4 , 5 , 6 , 7 ,8 , 9 , 10 , 11, 12, 13];

//using For-loop
for(let myNumber of numbers){
     let ordinalEnding: string;

     if (myNumber === 1){
          ordinalEnding = "st"
     }
     else if  (myNumber === 2){
          ordinalEnding = "nd"
     }
     else if  (myNumber === 3){
          ordinalEnding = "rd"
     }
     else {
          ordinalEnding = "th"
     }
     console.log(`${myNumber}${ordinalEnding}`)
}

