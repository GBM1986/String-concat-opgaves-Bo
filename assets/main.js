let firstName = "Gunnar";
let lastName = "Magnusson";

let mySpace = " ";

let fullName = firstName.concat(mySpace,lastName);

let fullName1 = firstName + " " + lastName;

console.log(fullName, fullName1);

let username = "SpaceBoy";
let message = "Welcome to the";

let welcomeMessage = message.concat(mySpace,username);

var welcomeMessage1 = message + mySpace + username;

console.log(welcomeMessage, welcomeMessage1);


let cityName = "New York";
let zipCode = "10001";

let address = cityName.concat(mySpace,zipCode);

let address1 = cityName + mySpace + zipCode;

console.log(address, address1);

let holidayDestination = "Reykjavik";
let vaccationPlan = "I plan to go to ".concat(holidayDestination,mySpace+"next week");

let vaccationPlan2 = "I plan to go to " + holidayDestination + " next week";

console.log(vaccationPlan,vaccationPlan2);

let productName = "Iphone";
let productPrice = "$1200";

let productMessage = "the selected product is ".concat(productName,mySpace, "and it costs ".concat(productPrice,mySpace,"dollars"));

let productMessage2 = "The selected product is " + productName + " and it costs" + productPrice + " dollars";

console.log(productMessage, productMessage2);
