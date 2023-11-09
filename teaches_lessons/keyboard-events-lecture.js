
const body = document.querySelector(`body`);


const konamiCode = [`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`b`,`a`,`Enter`];

//log a key press
//create an array that holds the characters for konami code
//create a comparison array that is empty
//push keystokes into your empty array
//loop through both arrays and compare the iterations to eachother
const konamiCheck = (e, keysPressed) =>{
    console.log(e.key);
    //the value of i can be used to compare the index of both the keypressed array and the konami code array
    for (let i = 0; i < keysPressed.length; i++) {
        // check if the position of konamiCode matches position of keyPressed
        if (konamiCode[i] !== keysPressed[i]) {
            alert (`wrong code`);
            keysPressed = [];
            break;
        }
        if (i === konamiCode.length - 1){
            alert (`you added 30 lives`);
            keysPressed = [];
        }
    }
    return keysPressed;
}





// body.addEventListener(`keydown`, keyupListener);

(()=>{
    // body.addEventListener('keydown', e => {
    //     console.log(e);
    // });
    let keysPressed = [];
    body.addEventListener('keydown', e=> (keysPressed = konamiCheck(e, keysPressed)));
})();