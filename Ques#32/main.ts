//Ques#32 Array for Current User
let currentuser =["sana","ali","rabia","sania"]

//Array for new user
let newusers =["amir","ali","fatima","Sania"]

newusers.forEach(new_one_user =>{
    let ourcondition =currentuser.some(currentuser => currentuser.toLowerCase() === new_one_user.toLowerCase())
    if(ourcondition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`this username ${new_one_user} is available`)
    }  
})