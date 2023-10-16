
    /*Basic JavaScript Function:*/
// Declare a constant function 'add' that takes two arguments 'a' and 'b'
const add = (a, b) => a + b;

// Example usage: Call the 'add' function with 5 and 3 as arguments, and store the result in 'result'
const result = add(5, 3); // result will be 8




/*String Manipulation Function:
  */
// Declare a constant function 'capitalizeFirstLetter' that takes a string argument 'str'
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Example usage: Call the 'capitalizeFirstLetter' function with 'hello' as an argument and store the result in 'capitalizedString'
const inputString = "hello";
const capitalizedString = capitalizeFirstLetter(inputString); // "Hello"




/**Array Manipulation Function:*/
// Declare a constant function 'findMax' that takes an array argument 'arr'
const findMax = (arr) => Math.max(...arr);

// Example usage: Call the 'findMax' function with an array of numbers and store the result in 'maxNumber'
const numbers = [10, 5, 20, 15];
const maxNumber = findMax(numbers); // 20




//Event Handling Function://
// Declare a constant function 'handleClick' using an arrow function
const handleClick = () => {
    alert("Button Clicked!");
}

// Add an event listener to a button element with the id 'myButton' and call 'handleClick' when the button is clicked
const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);




/*Async Function (Promises):*/
// Declare a constant function 'fetchData' using an arrow function
const fetchData = () => {
    // Use the Fetch API to make a network request to the specified URL
    return fetch("https://api.example.com/data")
        // Chain a 'then' method to handle the response and parse it as JSON
        .then(response => response.json())
        // Chain another 'then' method to log the parsed data
        .then(data => {
            console.log(data);
        })
        // Chain a 'catch' method to handle errors and log them
        .catch(error => {
            console.error("Error: " + error);
        });
}



/*Arrow Function:*/
// Declare a constant function 'double' that takes a 'number' as an argument and returns its doubled value
const double = (number) => number * 2;

// Example usage: Call the 'double' function with 7 as an argument and store the result in 'result'
const result = double(7); // 14























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


