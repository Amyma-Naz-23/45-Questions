//Ques #38 function to describe the city
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("Lahore");
describe_city("peshawar", "Pakistan");
