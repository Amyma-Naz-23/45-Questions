//Ques #30
let userName = ["Maham","Ali","Admin","Sania","Sara"]

//Using ForEach loop on ARRAY
userName.forEach(oneuser => {
    if(oneuser ==="Admin"){
        console.log(`Hello${oneuser}, would you like to see a status report?` )
    }else {
        console.log(`Hello ${oneuser},thank you for login in again`)
    }
});