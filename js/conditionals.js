/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// let userColor = prompt(`what's your favorite color?`);
//
const analyzeColor = (colors) => {
    if(colors === `red`){
        return (`you must have a firey soul`);
    } else if(colors === `blue`){
        return(`Luck is on your side friend`);
    }else if(colors === `green`){
        return(`you have a calm presence about you`);
    }else{
        return(`that's either not a color or not one that came to my mind`);
    }
};
// let myMessage = analyzeColor(userColor.toLowerCase());
// console.log(myMessage);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//MY FIRST ATTEMPT (I rebuilt the entire function)
// const analyzeColor = (color) => {
//     if(color === `red`){
//         return (`you must have a firey soul.`);
//     } else if(color === `blue`){
//         return(`Luck is on your side friend.`);
//     }else if(color === `green`){
//         return(`you have a calm presence about you.`);
//     }else{
//         return(`that's either not a color or not one I thought of that's cool though.`);
//     }
// }
// console.log(randomColor);
// console.log(analyzeColor(randomColor.toLowerCase()));

//THE EASY WAY (didn't have to rebuild everything)
// const myMessage = analyzeColor(randomColor);
// console.log(myMessage);


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// console.log(randomColor);
//
// switch(randomColor){
//     case "red":
//         console.log(`that's hot`);
//         break;
//     case "blue":
//         console.log(`that's cool`);
//         break;
//     case "orange":
//         console.log(`Scary color`)
//         break;
//     case "green":
//         console.log(`I like green too!`);
//         break;
//     default:
//         console.log(`I didn't account for this color but that's cool`);
//         break;
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// I did this in my previous code


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// const calculateTotal = (itemPrice, luckyNumber) =>{
//     alert (`your bill today is ${itemPrice} before the discount.`)
//     if(luckyNumber === 0){
//         return itemPrice;
//     }else if(luckyNumber === 1){
//         return itemPrice - (itemPrice * 0.10);
//     }else if(luckyNumber === 2){
//         return itemPrice - (itemPrice * 0.25);
//     }else if(luckyNumber === 3){
//         return itemPrice - (itemPrice * 0.35);
//     }else if(luckyNumber === 4){
//         return itemPrice - (itemPrice * 0.50);
//     }else if(luckyNumber === 5){
//         return (`your item is free today`);
//     }
// }

//console.log(calculateTotal(35, 2));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// alert (`your lucky number is ${luckyNumber}`);
// alert (`your total today is ${calculateTotal(35, luckyNumber)} today`);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// const askUserForNum = () => {
//     // confirm(`would you like to enter a number`);
//     if (confirm(`would you like to enter a number`)) {
//         let userInputNum = prompt(`please enter your number.`);
//         return userInputNum;
//     }
// }
// console.log(askUserForNum());
// askUserForNum();

//TEACHERS WALK THROUGH
const doTheToDoThang = () => {
    const willEnteraNumber = confirm(`would you like to enter a number?`);
    if(!willEnteraNumber){
        return false;
    }
    if (willEnteraNumber) {
        const userNumber = prompt(`enter a number.`);
        const userNumberFloat = parseFloat(userNumber);
        if (isNaN(userNumberFloat)){
            return false;
        }
        const isEven = userNumberFloat % 2 === 0;
        const isEvenMsg = isEven ? `your number is even` : `your number is odd`;
        alert(isEvenMsg)
        const plus100 = userNumberFloat + 100;
        alert(`your number plus 100 is ${plus100}`);
        const isPositive = userNumberFloat >= 0;
        const isPoistiveMsg = isPositive ? `your number is positive` : `your number is negative`;
        alert(isPoistiveMsg)
    } else {
        alert(`okay bye....!`);
    }
};
doTheToDoThang();