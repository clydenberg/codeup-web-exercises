
//INSTRUCTIONS//

//1:log a key press

//2:create an array that holds the characters for konami code

//3:create a comparison array that is empty

//4:push keystokes into your empty array

//5:loop through both arrays and compare the iterations to eachother


/* THIS IS THE BREAKDOWN ITS UGLY
//I CREATED A FUNCTION THAT HOLDS THE PARAMETERS: EVENT, KEYSPRESSED, AND DACODE. THIS ALLOWS ME TO CREATE A PUREISH REUSABLE FUNCTION.

const konamiCheck = (e, keysPressed, daCode) =>{
    // console.log(e.key);

    //THE FIRST THING THE FUNCTION DOES IS PUSH THE KEY PRESSES INTO AN EMPTY ARRAY
    keysPressed.push(e.key);

    // console.log("Konami Array => ", konamiCode);
    // console.log("Keys Array => ", keysPressed)

    //HERE WERE CREATING A LOOP AND USING THE VALUE I TO COMPARE THE INDEXES OF THE KEYPRESSED ARRAY AND DACODE ARRAY.

    for (let i = 0; i < keysPressed.length; i++) {

        //THIS IF STATEMENT CHECKS IF THE INDEX OF KEYSPRESSED MATCHES THE INDEX OF DACODE.
        if (keysPressed[i] !== daCode[i]) {
            // console.log(`As it turns out, ${keysPressed[i]} is NOT equal to ${konamiCode[i]}`);
            alert (`wrong code`);

            //THIS RESETS THE ARRAY TO EMPTY AND BREAKS OUT OF THE FUNCTION IF THE CODE INPUTS DON'T MATCH.
            keysPressed = [];
            break;
        }

        //HERE WE COMPARE THE ENTIRETY OF BOTH ARRAYS AND WHEN THEY MATCH IT WILL SEND AN ALERT SAYING IT WORKED AND RESET EMPTYARRAY BACK TO EMPTY SO THE USER CAN REINPUT THE COMMAND IF THEY WOULD LIKE.
        if (keysPressed.length - 1 === daCode.length - 1){
            alert (`you added 30 lives`);
            document.body.style.backgroundColor = `turquoise`;
            keysPressed = [];
        }
    }
    //BY RETURNING KEYSPRESSED WE ARE STORING EACH CHARACTER PRESSED INTO THE EMPTY ARRAY THAT WE CREATED IN THE GLOBAL VARIABLE.
    return keysPressed;
}
*/

const konamiCheck = (e, keysPressed, daCode) =>{
    keysPressed.push(e.key);
    for (let i = 0; i < keysPressed.length; i++) {
        if (keysPressed[i] !== daCode[i]) {
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
    return keysPressed;
}




// body.addEventListener(`keydown`, keyupListener);

(()=>{

    //THIS IS AN EMPTY ARRAY THAT WE USE TO COMPARE TO THE KONAMI CODE ARRAY WE DO THIS BY PUSHING THE INPUTS INTO IT AT THE BEGINNING OF THE KONAMICHECK FUNCTION.
    let emptyArray = [];

    //THIS IS THE ARRAY WE FEED AS A PARAMETER TO THE KONAMICHECK FUNCTION IT HOLDS ALL THE KEYPRESSES WERE COMPARING TO THE EMPTY ARRAY
    const konamiCode = [`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`b`,`a`,`Enter`];

    //HERE I CREATE AN EVENT LISTENER ON THE DOCUMENT THAT RESPONDS TO A KEYDOWN INPUT, WE THEN FEED A ANONYMOUS FUNCTION THE KONAMICHECK FUNCTION SO WE CAN CONTROL THE PARAMETERS OF THE KONAMICHECK FUNCTION.
    document.body.addEventListener('keydown',e=> {
        emptyArray = konamiCheck(e, emptyArray, konamiCode);
    });
})();