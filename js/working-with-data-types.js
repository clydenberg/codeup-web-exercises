
    console.log("EXCERSIZE #1");

let a = 1;
    console.log("the value of a =>", a);
let b = a++;
    console.log("the value of b =>", b);
let c = ++a;
    console.log("the value of c =>", c);

let d = "hello";
let e = false;
    console.log(d++);
    console.log(e++);

let perplexed;
perplexed + 2;
console.log(perplexed);

let price = 2.7;
let fixedPrice = price.toFixed(2);
    console.log(fixedPrice);

let Price = "2.7";
let FixedPrice = parseFloat(Price).toFixed(2);
    console.log(FixedPrice);
//preferably never run functions or methods in console.log save your results to a reusable variable just incase something changes

    console.log(isNaN(Number.MAX_VALUE));

    console.log("EXCERSIZE #2")

let sample = "Hello Codeup";
    console.log(sample);

    console.log("the length of sample is", sample.length);

    console.log("we going uppercase today", sample.toUpperCase(sample));

    console.log(sample + " Students ");

    console.log(sample.indexOf("c"));

    console.log(sample.indexOf("C"));

    console.log(sample.substring(6,12));

let foundLowerCaseC = sample.includes("C");
    console.log(foundLowerCaseC);

//sample = sample.replace("students","class");

    console.log("EXCERSIZE #3.A");

let hercules = 1;
let lilMermaid = 3;
let broBear = 5;
let pricePerDay = 3.0;
let totalDays = broBear + lilMermaid + hercules;
let totalRent = totalDays * pricePerDay;
totalRent = totalRent.toLocaleString("en-us", {style:"currency", currency: "USD"});
    console.log("the total rental fee is " + totalRent);

    console.log("EXCERSIZE #3.B");

let google = 400 * 6;
let amazon = 380 * 4;
let faceBook = 350 * 10;
let weeklyIncome = faceBook + amazon + google;
    console.log("your weekly income would be " + weeklyIncome);

    console.log("EXCERSIZE #4");

let userName = `codeup`
let password = `notastrongpassword`

let passChar = password.length >= 5;
    console.log(passChar);

let noUser = password.toLowerCase().includes(userName.toLowerCase());
    console.log(noUser);

let userChar = userName.length <= 20;
    console.log(userChar);

let noSpaces = userName.indexOf(` `) >= 0 && password.indexOf(` `) >= 0;
    console.log(noSpaces);





