//Ques#31
let name_user = ["Ali" , "Wasi" , "Unsa", "Mehwish" , "Rabia"]

name_user = []

if (name_user.length === 0){
    console.log("Your Array in Empty We need to find some user!")
}
name_user.forEach(myName =>{
    if(myName === "unsa"){
    console.log(`Hello ${myName}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${myName}, thank you for loging again`)
    }
})