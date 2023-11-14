/*
TODO #1Open the file named parks.html for editing. Commit all changes to GitHub.

TODO #2 Under the FAQ, add 3 unordered lists like above. Each list should contain a national park name in an h3 element, and a ul of 4 facts about the park.

TODO #3 Create a button that, when clicked, makes the last li in each ul have a yellow background.

TODO #4 When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.

TODO #5 When any list item is clicked, the first li of that list item's parent ul should have a font color of blue. Hint: you should again rely on this in the li event handler.
 */

const handleHighlight = (e) => {
    const lastListItems = document.querySelectorAll("ul li:last-child");
    for (let lastListItem of lastListItems) {
        lastListItem.classList.toggle("highlight");
    }
};

const handleH3Click = (e) => {
    const list = e.target.parentElement.querySelector("ul");
    list.classList.toggle("bold");
};

const handleLIClick = (e) => {
    const firstListItem = e.target.parentElement.firstElementChild;
    firstListItem.classList.toggle("blue");
};

const handlePicSwitch = (e, pictures) => {
    const leftImg = pictures[0];
    const centerImg = pictures[1];
    const rightImg = pictures[2];

    const leftImgSrc = leftImg.getAttribute("src");
    const centerImgSrc = centerImg.getAttribute("src");
    const rightImgSrc = rightImg.getAttribute("src");

    if (e.target === leftImg) {
        leftImg.setAttribute("src", centerImgSrc);
        centerImg.setAttribute("src", leftImgSrc);
    }
    if (e.target === centerImg) {
        const switchWith = [leftImg, rightImg][Math.floor(Math.random() * 2)];
        centerImg.setAttribute("src", switchWith.getAttribute("src"));
        switchWith.setAttribute("src", centerImgSrc);
    }
    if (e.target === rightImg) {
        rightImg.setAttribute("src", centerImgSrc);
        centerImg.setAttribute("src", rightImgSrc);
    }
};

// MAIN
(() => {
    const highlightBtn = document.querySelector("button[data-last]");
    highlightBtn.addEventListener("click", handleHighlight);

    const h3s = document.querySelectorAll("h3");
    for (let h3 of h3s) {
        h3.addEventListener("click", handleH3Click);
    }

    const listItems = document.querySelectorAll("li");
    for (let listItem of listItems) {
        listItem.addEventListener("click", handleLIClick);
    }

    const pictures = document.querySelectorAll("img.picture-frame");
    for (let pic of pictures) {
        pic.addEventListener("click", (e) => {
            handlePicSwitch(e, pictures);
        });
    }
})();