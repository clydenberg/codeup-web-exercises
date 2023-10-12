const fruits = ["orange", "strawberry", "kiwi", "tomato", "banana", "blueberry"];

const firstFruit = fruits[0];
const nmrOfFruits = fruits.length;

/* traditional for loop */

// for (let i = 0; i < fruits.length; i++) {
// 	const fruit = fruits[i];
// 	if (fruit.includes("berry")) {
// 		console.log(fruit);
// 	}
// }

/* for ... of loop */

// for (let fruit of fruits) {
// 	if (fruit.includes("berry")) {
// 		console.log(fruit);
// 	}
// }

/* forEach method */

// fruits.forEach((fruit, index, array) => {
// 	if (fruit.includes("berry")) {
// 		console.log(fruit);
// 	}
// });

const saladDressings = [
    "Ranch",
    "Caesar",
    "Italian",
    "Balsamic Vinaigrette",
    "Thousand Island",
    "Blue Cheese",
    "French",
    "Honey Mustard",
    "Greek",
    "Poppy Seed",
    "Sesame Ginger",
    "Cilantro Lime",
    "Lemon Vinaigrette",
    "Apple Cider Vinaigrette",
    "Raspberry Vinaigrette",
    "Avocado",
    "Pesto",
    "Tahini",
    "Roasted Garlic",
    "Soy & Ginger",
];

// const nmrOfSaladDressings = saladDressings.length;
// console.log(`We got ${nmrOfSaladDressings} dressings here!`);
//
// let longestDressing = "";
// saladDressings.forEach(function (dressing) {
//     if (dressing.length > longestDressing.length) {
//         longestDressing = dressing;
//     }
// });
// console.log(longestDressing);

// IIFE (Immediately Invoke Function Expression)
// Main method
// (() => {
//     // START HERE
// })();
