console.log("Hello from external JavaScript");

//Use the alert function to show a message that says 'Welcome to my Website!'.

//alert("Welcome to my Website");

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the
//color entered is your favorite color too.

// let userFavColor = prompt("What's your favorite color?");
// alert(`My favorite color is also: ${userFavColor}`);

//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?

//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//Use an alert to show the results of each problem.

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//rate per hour.
//Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

const hourlyPayAtGoogle = 400;
const hourlyPayAtAmazon = 380
const hourlyPayAtFacebook = 350

let workedHoursAtGoogle = prompt("How many hours did you work at google this week?")
let weeklyPayFromGoogle = parseInt(workedHoursAtGoogle) * hourlyPayAtGoogle;
alert(`Your pay from google this week is: ${weeklyPayFromGoogle}`);

let workedHoursAtAmazon = prompt("How many hours did you work at Amazon this week?");
let weeklyPayFromAmazon = parseInt(workedHoursAtAmazon) * hourlyPayAtAmazon;
alert(`Your pay from Amazon this week is: ${weeklyPayFromAmazon}`);

let workedHoursAtFacebook = prompt("How many hours did you work at Facebook this week?");
let weeklyPayFromFacebook = parseInt(workedHoursAtFacebook) * hourlyPayAtFacebook;
alert(`Your weekly pay from Facebook is: ${weeklyPayFromFacebook}`);

let totalWeeklyIncome = weeklyPayFromFacebook + weeklyPayFromAmazon + weeklyPayFromGoogle;
alert(`Your total income this week from all your jobs is: ${totalWeeklyIncome}`);