//FOR LOOP

// for (/*initialization*/; /*condition*/; /*increment*/){
//     //the code that will repeat
// }

for (let i = 0;i <= 10; i++){
    console.log(`the code ran at index ${i}`);
};

//WHILE LOOP

// while(condition){
//
// }

let index = 0;
while(index < 10){
    console.log(`the code ran at index ${index}`);
    index++;
}

let favPizza = prompt(`what is your favorite pizza?`);
while (favPizza !== `pepperoni`){
    favPizza = prompt(`WRONG ANSWER TRY AGAIN!`);
}
alert(`That's what i thought. That's a good choice.`);

//DO WHILE LOOP

// do{
//     //body of our code
// } while(condition);

let myNumber = 0;

do {
    console.log(myNumber);
    myNumber++;
} while(myNumber >= 0);

// write a function called buildPyramid that takes a number as an argument.
// the function should return an asterisk pyramid that has as many rows as the number

// const buildRow = (num) => {
//     let result = ``;
//     for(let i = 0; i < num; i++){
//         result += `*`;
//     }
//     result += "\n";
//     return result;
// };
//
// const buildPyramid =(rows) => {
//     let result = ``;
//     //first loop
//     for(let i = 0; i < rows ; i++){
//         result += buildRow(i);
//     }
//     return result;
// }
//
// let pyramid = buildPyramid(5);
// console.log(pyramid);


//BREAK AND CONTINUE

for (let i = 0; i <= 10; i++) {
    if (i !== 5) {
        console.log(`the current index is ${i}`);
    } else {
        console.log(`omg its equal to 5`);
    }
}