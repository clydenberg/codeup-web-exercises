// create a function named isCoding that logs "I LOVE CODING" to the console

////////////////////////////////////////////////////
// This function is called a function decleration//
//////////////////////////////////////////////////

// function isCoding(userFullName){
//     console.log(` ${userFullName} LOVES CODING!!`);
// };
// isCoding("Casper");
// isCoding("Isaac");

///////////////////////////////////
//Annonymous Function Expression//
/////////////////////////////////

// const sayHello = function(userName){
//     console.log(`hello ${userName}`);
// };
//
// sayHello(`Casper`);

/////////////////////////////////////////////////////////
// Arrow Function Expression are a preferred Function //
///////////////////////////////////////////////////////

// const sayHello = (usersFullName) => console.log(`hello ${usersFullName}`);
//
// sayHello("Casper");

//This is another example below

// const isCoding = (userFullName) => console.log(`${userFullName} LOVES CODING`);
//
// isCoding("Casper");

/////////////////////
// Return Keyword //
///////////////////

// const sayHello = (usersFullName) => {
//     return `Hello, ${usersFullName}`;
// };
//
// const greeting = sayHello("casper");
// console.log(greeting);


// const firstName = "Casper";
// const greetingToUser = "Loves Sleeping";
//
// const isCoding = (userFullName, greeting) => {
//     return `${userFullName}, ${greeting}`;
// };
//
// const tooTired = isCoding(firstName, greetingToUser);
//
// console.log(tooTired);
// console.log(isCoding("John", "Hello"));
//
// const moviesFunction = (daysRented, moviePrice){
//     let totalCost = daysRented * moviePrice;
// }
//
// moviesFunction(11,6.99);

/////////////////////
// default values //
///////////////////

// const sayHello =(userFullName = "no username") => {
//     return `hello, ${userFullName}`;
// };
//
// const greeting = sayHello("Casper");
// const greeting2 = sayHello();
//
// console.log(greeting);
// console.log(greeting2);

//////////////////////////////////////
// Global Scoping Vs Local Scoping //
////////////////////////////////////

// const globalVar = "I am global";
//
// const tieFighter = (global) => {
//   const localVariable = "I am local";
//   console.log(global);
// };
//
// tieFighter(globalVar);

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

const sayHello = (name) =>{
    return `hello ${name}`;
};

// console.log(sayHello(`Casper`));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let helloMessage = sayHello('casper');
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// const myName = "Casper"
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 **/
// const isTwo = (aNumber) =>{
//     return aNumber == 2;
// }

 /** Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// console.log(random);
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// const calculateTip = (tipPercent, bill) =>{
//     return (100 * tipPercent) / bill;
// };

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// let restrauntBill = prompt(`how much was your bill today?`);
// let leaveATip = prompt(`would you like to leave a 10 15 or custom percent tip today?`);
//
// let totalTip = calculateTip(parseFloat(leaveATip),parseFloat(restrauntBill));
//
// alert(`thank you for your generous tip of ${totalTip}`);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

const applyDiscount = (discount, itemPrice)=>{
    let discountAmount = (100 * discount) / itemPrice;
    let newTotal = itemPrice - discountAmount
    return newTotal;
};

let yourItemPrice = prompt(`how much was your item?`);
let discountPercent = prompt(`how much was your discount?`);

let discountedPrice = applyDiscount(parseFloat(discountPercent), parseFloat(yourItemPrice));

alert(`after your discount the item will be ${discountedPrice}`);





