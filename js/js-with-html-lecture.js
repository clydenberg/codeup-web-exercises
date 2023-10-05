//console.log("testing");

// single line comment

/*
    mulit
    line
    comment
 */

//let easyMath = 2 + 2;
//console.log(easyMath);

//shorthand operators
//let x = 1;
//x = x + 1;
//x += 1;

// Unary Operators
/* let y = 5;
y++;
y = y + 1;
y--;
y = y - 1;
*/

//let pi = 3.14;
//console.log(pi);

//method to turn a number into a string

//let piString = pi.toString();
//console.log(piString);

//a function to convert from a string to a number

//let nmrOfStudents = "19.37";
//parseInt(nmrOfStudents); <- cant show numbers past a decimal
//parseFloat(nmrOfStudents); <- retains more accuracy shows decimals
//console.log(nmrOfStudents);
//when a variable runs a function thats called a method

/*let bankAccount = "19.4376";
console.log("Original value =>", bankAccount);
bankAccount = parseFloat(bankAccount);
console.log("parseFloat =>", bankAccount)
bankAccount = parseFloat(bankAccount.toFixed(2));
console.log("toFixed =>", bankAccount);
bankAccount = parseInt(bankAccount);
console.log("parseInt =>", bankAccount);
 */

let x = `griffin`;
let xNumber = Number(x);// NaN's happen when running operations on something that's not a number

console.log(xNumber);

let isEqual = xNumber === NaN;
console.log("NaN strict comparison =>", isEqual);
let isReallyEqual = isNaN(xNumber);
console.log("isNaN functions =>", isReallyEqual);

/// truthy/falsey
// falsey
let emptyString = "" == false;
console.log("emptyString =>", emptyString);
let zero = 0 == false;
console.log("zero =>", zero)
let noValue; // undefined
console.log(noValue);
let noData = null; // intentional absent of data
//truthy
let middleName = "Casper";
//check falsey or truthy program. it will run if, if its interpreted as truthy. Or it will run else if its interpreted as falsey
if(middleName) {
    console.log("YUP, IT'S TRUTHY");
} else {
    console.log("NOPE, IT'S FALSEY");
}

//STRING METHODS

let userName = "GlitzyPhonk(AIM)";
let guildName;
// get the length of the string
let nameLength = userName.length;
console.log("nameLength =>", nameLength);
// find the index of the "(" character
let guildNameStart = userName.indexOf("(")
console.log("guildNameStart =>", guildNameStart);
//find the index of the closing ")"
let guildNameEnd = nameLength -1;
guildName = userName.substring(guildNameStart + 1, guildNameEnd);
console.log("guildName =>", guildName);
// we want to remove the guild name from the username now
let guildNameWithParenthesis = "(" + guildName + ")";
userName = userName.replace(guildNameWithParenthesis, "");
userName = userName.trim();
console.log("userName =>", userName);

//TEMPLATE STRINGS
let channelMessage = "username from the guildName guild has logged in.";
channelMessage = userName + " from the " + guildName + " guild has logged in. ";
channelMessage = `${userName} from the ${guildName} guild has logged in.`;
console.log(channelMessage);

