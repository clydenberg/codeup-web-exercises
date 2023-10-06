///////////////////////////////////////////////////////////
// I will be testing different code here in my free time//
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// This is an example of a Arrow Function using the Movies Question //
/////////////////////////////////////////////////////////////////////

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
//
// let activateMoviesCostFunction = moviesCostFunction(lilMermaidRentTotal,movieRentalFee);
//
// console.log(activateMoviesCostFunction);

const movieFeeFunction = (daysRented, movieCost) => {
    return daysRented * movieCost;
};

const rentalFee = 3
let rentingLilMermaid = prompt(`how long would you like to rent the little mermaid?`);
let daysRentedLilMermaid = parseFloat(rentingLilMermaid);
let rentingBroBear = prompt(`how long would you like to rent Brother Bear?`);
let daysRentedBroBear = parseFloat(rentingBroBear);
let rentingHercules = prompt(`how long would you like to rent Hercules?`);
let daysRentedHercules = parseFloat(rentingHercules);

let lilMermaid = movieFeeFunction (daysRentedLilMermaid,rentalFee);
let broBear = movieFeeFunction (daysRentedBroBear,rentalFee);
let hercules = movieFeeFunction (daysRentedHercules,rentalFee);

console.log(lilMermaid);
console.log(broBear);
console.log(hercules);

let totalMovieFees = lilMermaid + broBear + hercules;

alert(`The total cost of all your movies today is ${totalMovieFees}`);
console.log(`The total cost of all your movies today is ${totalMovieFees}`);
//////////////////////////////////////////////////////////
//Example of how a constant can not be reassigned later//
////////////////////////////////////////////////////////
// const pi = 3.14
//
// pi = pi * 30;
//
// console.log(pi);

