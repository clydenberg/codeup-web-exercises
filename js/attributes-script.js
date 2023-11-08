const cardTimers = () =>{

    const clrArray = [`blue`, `pink`, `red`, `green`, `purple`];
    let clrIndex = 0;

    const profilePic = document.querySelector(`#profile-pic`);

    setTimeout(()=>{
        if(profilePic.getAttribute("src") === `https://via.placeholder.com/150`){
            profilePic.setAttribute("src", `./img/Kiyomasa_Senji.webp`);
            profilePic.setAttribute(`alt`, `CrowDMW`);
        }
    }, 2000);

    const profileName = document.querySelector(`#profile-name`);

    setTimeout(()=>{
        profileName.innerText = `Senji Red Knife Wielder`
    }, 4000);

    const profileDesc = document.querySelector(`#profile-desc`);

    setTimeout(()=>{
        profileDesc.style.color = `orange`;
        profileDesc.style.fontFamily = `Cochin`;
    }, 6000);

    const profileCard = document.querySelector(`#profile-card`);

    setInterval(()=>{
        clrIndex = Math.floor(Math.random() * clrArray.length);
        profileCard.style.backgroundColor = clrArray[clrIndex];
    }, 1000)

    setTimeout(() =>{
        let userName = prompt(`what's your name?`);
        profileName.innerText = `${userName}`;
    }, 8000);

    // setTimeout(()=>{
    //     profileCard.classList.add(`clr1`);
    // }, 2000);
    //
    // setInterval(()=>{
    //     if(profileCard.classList.contains(`clr1`)){
    //         profileCard.classList.remove(`clr1`);
    //         profileCard.classList.add(`clr2`);
    //     } else {
    //         profileCard.classList.remove(`clr2`);
    //         profileCard.classList.add(`clr1`);
    //     }
    // }, 2000);
}

(()=>{
    cardTimers();
})();