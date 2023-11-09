
//Instructions//

//1:log a key press

//2:create an array that holds the characters for konami code

//3:create a comparison array that is empty

//4:push keystokes into your empty array

//5:loop through both arrays and compare the iterations to eachother



// I created a function that holds the parameters: event, keypressed, and daCode. This allows me to create a reusable function.
const konamiCheck = (e, keysPressed, daCode) =>{
    // console.log(e.key);
    //the first thing the function does is push the key press into an empty array.
    keysPressed.push(e.key);
    // console.log("Konami Array => ", konamiCode);
    // console.log("Keys Array => ", keysPressed)
    //here were creating a loop and using the value i to compare the indexes of the keypressed array and daCode array.
    for (let i = 0; i < keysPressed.length; i++) {
        // this checks if the index of keysPressed matches the index of daCode
        if (keysPressed[i] !== daCode[i]) {
            // console.log(`As it turns out, ${keysPressed[i]} is NOT equal to ${konamiCode[i]}`);
            alert (`wrong code`);
            keysPressed = [];
            break;
        }
        if (keysPressed.length - 1 === daCode.length - 1){
            alert (`you added 30 lives`);
            document.body.style.backgroundColor = `turquoise`;
            keysPressed = [];
        }
    }
    //by returning keyspressed we are storing each character into the empty array for keysPressed in the global variable.
    return keysPressed;
}





// body.addEventListener(`keydown`, keyupListener);

(()=>{
    //this is a empty a array that we use to compare to the konami code
    let keysPressed = [];
    const konamiCode = [`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`b`,`a`,`Enter`];

    // body.addEventListener('keydown', e=> (keysPressed = konamiCheck(e, keysPressed)));

    document.body.addEventListener('keydown',e=> {
        keysPressed = konamiCheck(e, keysPressed, konamiCode);
    });
})();