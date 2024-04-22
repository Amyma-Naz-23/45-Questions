//Ques #45 Define a function to creat a car object with optional options

function createCar (manfacturing, model, ...options){
    let car ={
        manfacture: manfacturing,
        model: model
    };

    options.forEach(Option =>{ 
        let[key, value] = Option.split(":");
        car[key.trim()] = value.trim();

    });
    return car;
}

let my_car = createCar("Toyato", "Corrolla" ,"colour: Pink","Sunroof: true")

console.log(my_car);