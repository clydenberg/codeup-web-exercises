//EXCERSIZE 8

// let i = 2;
// while(i < 65536){
//     console.log(i *= 2);
// }

//EXCERSIZE 9

//An ice cream seller can't go home until she sells all of her cones.
//First write enough code that generates a random number between 50 and 100 representing
//the amount of cones to sell before you start your loop.
//Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones
//being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.
//
//The below code shows how to get the random numbers for this exercise.
// // This is how you get a random number between 50 and 100
    //let allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
    //Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// let totalConesLeft = Math.floor(Math.random() * 50) + 50;
// do{
//     let customerOrder = Math.floor(Math.random() * 5) + 1;
//     console.log(`I have ${totalConesLeft} cones left to sell today.`);
//     if(totalConesLeft < customerOrder){
//         console.log(`sorry i only have ${totalConesLeft} left i cant sell you ${customerOrder} i'll sell you my
//         remaining ${totalConesLeft} cones though.`);
//         totalConesLeft = 0;
//         console.log(`YAY!! I have sold all my cones!`);
//     }else if (totalConesLeft >= customerOrder){
//         console.log(`your cones are coming right up, we sold ${customerOrder}`);
//         totalConesLeft = totalConesLeft - customerOrder;
//         console.log(totalConesLeft);
//     }
// } while(totalConesLeft > 0);
