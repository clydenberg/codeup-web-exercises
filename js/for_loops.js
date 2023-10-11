//EXCERSIZE #2

//Create a function named showMultiplicationTable
//that accepts a number and console.logs the multiplication table for that number
//(just multiply by the numbers 1 through 10)

// const showMultiplicationTable = (num) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(num * i);
//     }
// };
//
// showMultiplicationTable(5);

//EXCERSIZE #3

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
//output to the console whether each number is odd or even.

// const oddOrEven = () => {
//     for (let i = 1; i <= 10; i++){
//         const num = Math.floor(Math.random(20) * 200);
//         if(num % 2 === 0){
//             console.log(`${num} is even`);
//         }else{
//             console.log(`${num} is odd`);
//         }
//     }
// };
//
// oddOrEven();

//EXCERSIZE 4

//Create a for loop that uses console.log to create the output shown below.
//
//  1
//  22
//  333
//  4444
//  55555
//  666666
//  7777777
//  88888888
//  999999999

//USE THE STRING METHOD REPEAT

// const numberPyramid = (num) => {
//     for(let i = 1; i <= num; i++){
//         const message = `${i}`.repeat(i);
//         console.log(message);
//     }
// };
// numberPyramid(9)

//MY FIRST ATTEMPT

// const buildRows = (num) => {
//     let result = ``;
//     for (let i = 1; i < 10; i++) {
//         result += i;
//     }
//     result += `\n`;
//     return result;
// }

// const buildPyramids = (rows) =>{
//     let result =``;
//     for (let i = 1; i <= rows; i++){
//         result += buildRows(i);
//     }
//     return result;
// };
// let pyramid = buildPyramids(9);
// console.log(pyramid);

//EXAMPLE I FOUND ONLINE NOT QUITE ACCURATE THOUGH

// function generatePyramid() {
//     var totalNumberofRows = 9;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = ``;
//     }
// }
//
// generatePyramid();

//EXCERSIZE 5

//Create a for loop that uses console.log to create the output shown below.
//
//  100
//  95
//  90
//  85
//  80
//  75
//  70
//  65
//  60
//  55
//  50
//  45
//  40
//  35
//  30
//  25
//  20
//  15
//  10
//  5

// for (let i = 100; i >= 0; i -= 5){
//     console.log(i);
// }
