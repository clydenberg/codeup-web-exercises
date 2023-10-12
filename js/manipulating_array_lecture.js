// IIFE
(() => {
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

    // most of the methods we've dealt with so far, don't transform the original value
    let myName = "jason";
    let myNameUpper = myName.toUpperCase();
    // console.log(myNameUpper);

    // many array methods do

    /* the push method */
    // console.log(daysOfTheWeek);
    daysOfTheWeek.push("Friday");
    // console.log(daysOfTheWeek);

    /* the unshift method */
    daysOfTheWeek.unshift("Sunday");
    // console.log(daysOfTheWeek);

    /* The pop method */
    const todoList = ["Take out the trash", "Clean the car", "Pay the bills"];
    const choreRemoved = todoList.pop();
    // console.log(todoList);
    // console.log(choreRemoved);

    /* the shift method */
    const choreRemoved2 = todoList.shift();
    // console.log(todoList);
    // console.log(choreRemoved2);

    // Locating array elements
    /* the indexOf Method */
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "red"];
    const greenIndex = colors.indexOf("green");
    // console.log("Green index => ", greenIndex);

    // if it doesn't find it
    const magentaIndex = colors.indexOf("magenta");
    // console.log("Magenta index => ", magentaIndex);
    if (magentaIndex >= 0) {
        // console.log("Found magenta");
    } else {
        // console.log("didn't find magenta");
    }

    // starting at the beginning
    const redIndexStart = colors.indexOf("red");
    console.log("Red index => ", redIndexStart);

    //starting at the end
    const redIndexLast = colors.lastIndexOf("red");
    // console.log("Last Red Index => ", redIndexLast);

    // jumping a bit ahead, but higher level function to filter arrays
    // const allRedValues = colors.filter((color) => {
    // 	return color.length < 5 && color.includes("e");
    // });
    // console.log(allRedValues);

    /* slice method */
    const lastTwoColors = colors.slice(colors.length - 2);
    // console.log(lastTwoColors);

    /* reverse method */
    // console.log(colors);
    // colors.reverse();
    // console.log(colors);

    /* sort method */
    console.log(colors);
    colors.sort();
    console.log(colors);

    /* splitting and joining */
    let namesString = "Joe,Bob,Sally";
    const namesArray = namesString.split(",");
    console.log(namesArray);

    let backToString = namesArray.join(", ");
    console.log(backToString);

    let url = "https://codeup.edu/";
    let domain = url.split("/")[2];
    console.log(domain);
})();