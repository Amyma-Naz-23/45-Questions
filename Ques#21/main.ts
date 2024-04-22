//Ques#21 think of something you could store in a TypeScript Object

interface Course{
     courseName :string;
     numofStudent :number;
     location :string;
     gender :string;
}

let Course = {
    courseName : "typescript",
     numofStudent :50000,
     location :"Govenor House",
     gender :"female"
};
console.log(Course);