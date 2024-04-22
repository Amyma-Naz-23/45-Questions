//Ques #45 Define a function to creat a car object with optional options
function createCar(manfacturing, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manfacture: manfacturing,
        model: model
    };
    options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = createCar("Toyato", "Corrolla", "colour: Pink", "Sunroof: true");
console.log(my_car);
