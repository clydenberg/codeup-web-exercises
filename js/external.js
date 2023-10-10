// console.log("Hello from external JavaScript");
//
// //Use the alert function to show a message that says 'Welcome to my Website!'.
//
// alert("Welcome to my Website");
//
// //Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the
// //color entered is your favorite color too.
//
// let userFavColor = prompt("What's your favorite color?");
// alert(`My favorite color is also: ${userFavColor}`);

//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//Use an alert to show the results of each problem.

//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?

const costOfMovieRental = 3;
alert(`Movies cost $3 per day.`);

let lilMermaidDaysRented = prompt("how many days would you like to rent the little mermaid?");
let costOfLilMermaid = parseInt(lilMermaidDaysRented) * costOfMovieRental;
alert(`The rental fee for the lil mermaid will be ${costOfLilMermaid}`);

let broBearDaysRented = prompt("how many days would you like to rent Brother Bear?");
let costOfBroBear = parseInt(broBearDaysRented) * costOfMovieRental;
alert(`The rental fee for BrotherBear will be ${costOfBroBear}`);

let herculesDaysRented = prompt("How many days would you like to rent Hercules?");
let costOfHercules = parseInt(herculesDaysRented) * costOfMovieRental;
alert(`The rental fee for Hercules will be ${costOfHercules}`);

let totalRentalCost = costOfLilMermaid + costOfBroBear + costOfHercules;
alert(`Your total cost for all of your movies will be: ${totalRentalCost}`);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//rate per hour.
//Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// const hourlyPayAtGoogle = 400;
// alert(`Google's Starting wage is $400 per hour.`);
// const hourlyPayAtAmazon = 380;
// alert(`Amazons starting wage is $380 per hour.`);
// const hourlyPayAtFacebook = 350;
// alert(`Facebook's starting wage is $350 per hour.`);
//
// let workedHoursAtGoogle = prompt("How many hours did you work at google this week?");
// let weeklyPayFromGoogle = parseInt(workedHoursAtGoogle) * hourlyPayAtGoogle;
// alert(`Your pay from google this week is: ${weeklyPayFromGoogle}`);
//
// let workedHoursAtAmazon = prompt("How many hours did you work at Amazon this week?");
// let weeklyPayFromAmazon = parseInt(workedHoursAtAmazon) * hourlyPayAtAmazon;
// alert(`Your pay from Amazon this week is: ${weeklyPayFromAmazon}`);
//
// let workedHoursAtFacebook = prompt("How many hours did you work at Facebook this week?");
// let weeklyPayFromFacebook = parseInt(workedHoursAtFacebook) * hourlyPayAtFacebook;
// alert(`Your weekly pay from Facebook is: ${weeklyPayFromFacebook}`);
//
// let totalWeeklyIncome = weeklyPayFromFacebook + weeklyPayFromAmazon + weeklyPayFromGoogle;
// alert(`Your total income this week from all your jobs is: ${totalWeeklyIncome}`);