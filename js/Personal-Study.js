///////////////////////////////////////////////////////////
// I will be testing different code here in my free time//
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// This is an example of a Arrow Function using the Movies Question //
/////////////////////////////////////////////////////////////////////
//
// const moviesCostFunction = (daysRented, movieCost) => {
//     //let totalCost = daysRented * movieCost;//this was my first attempt and will work but just doing return
//     //is a lot more efficient.
//     return daysRented * movieCost;
// };
//
// const movieRentalFee = 3;
// let lilMermaidDaysRented = prompt(`how many days would you like to rent the little mermaid?`);
// let lilMermaidRentTotal = parseFloat(lilMermaidDaysRented) * movieRentalFee;
//
// // use (days * charge) to get total money
// //im trying to be able to call the function by calling moviesCostFunction <- that's not how it works

// let activateMoviesCostFunction = moviesCostFunction(lilMermaidRentTotal,movieRentalFee);
//
// console.log(activateMoviesCostFunction);

// const movieFeeFunction = (daysRented, movieCost) => {
//     return daysRented * movieCost;
// };
//
// const rentalFee = 3
// let rentingLilMermaid = prompt(`how long would you like to rent the little mermaid?`);
// let daysRentedLilMermaid = parseFloat(rentingLilMermaid);
// let rentingBroBear = prompt(`how long would you like to rent Brother Bear?`);
// let daysRentedBroBear = parseFloat(rentingBroBear);
// let rentingHercules = prompt(`how long would you like to rent Hercules?`);
// let daysRentedHercules = parseFloat(rentingHercules);
//
// let lilMermaid = movieFeeFunction (daysRentedLilMermaid,rentalFee);
// let broBear = movieFeeFunction (daysRentedBroBear,rentalFee);
// let hercules = movieFeeFunction (daysRentedHercules,rentalFee);
//
// console.log(lilMermaid);
// console.log(broBear);
// console.log(hercules);
//
// let totalMovieFees = lilMermaid + broBear + hercules;
//
// alert(`The total cost of all your movies today is ${totalMovieFees}`);
// console.log(`The total cost of all your movies today is ${totalMovieFees}`);

//////////////////////////////////////////////////////////
//Example of how a constant can not be reassigned later//
////////////////////////////////////////////////////////

// const pi = 3.14
//
// pi = pi * 30;
//
// console.log(pi);

/////////////////////////////
//More Function Excersizes//
///////////////////////////

// ## Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that takes a number as input, representing a temperature in Celsius,
// and returns the equivalent temperature in Fahrenheit.

// const celciusToFarenheit = (celcius) =>{
//     return (celcius * 1.8) + 32;
// }
// console.log(celciusToFarenheit(32));

// ## Finding the Average
// Write a function average(a, b, c) that takes three numbers as arguments and returns their average.

// const average = (num1,num2,num3) =>{
//     return (num1 + num2 + num3) / 3;
// };
//
// console.log(average(12,3,15));

// ## First Character
// Write a function firstChar(str) that returns the first character of a string.

// const firstChar = (str) =>{
//     return str.charAt(0);
// };
// console.log(firstChar(`I tried`));
//
//
// // ## Last Character
// // Write a function lastChar(str) that returns the last character of a string.
//
// const lastChar =(string) =>{
//     return string.getEndPositionOfChar(string);
// }
//
// console.log(lastChar('hello'));
//
// //## Is Palindrome?
// //Write a function isPalindrome(str) that takes in a string and returns true if the string is a palindrome,
// //false otherwise. A palindrome is a word that is spelled the same forwards and backwards
// //i.e. racecar, mom, kayak.
// //To help, here is a function reverseString(str) that takes in a string and returns the reversed string.
// //You'll need to use it to solve isPalindrome.
// //const reverseString = (str) => {
// //return str.split("").reverse().join("");
// // }


//ANONYMOUS FUNCTION

// const increment = function (x) {
//     return x + 1;
// };
//
// let two = increment(1);
// console.log(two);


