(() => {
    // const headerRow = document.querySelector(`header.container:has(.row)`);
    // console.log(headerRow.innerHTML);
    // console.log(headerRow.innerText);

    // const heroH1 = document.querySelector(`.container.hero h1`);

    //GETTING ATTRIBUTES
    // const heroH1Id = heroH1.getAttribute(`id`);
    // console.log(`Hero H1 ID => ${heroH1Id}`);

    //SETTING ATTRIBUTES
    // heroH1.setAttribute(`id`, `cat-poop-coffee`);

    //VALIDATING ATTRIBUTES
    // const hasId = heroH1.hasAttribute(`id`);

    //CLASS MANIPULATION
    const menuToggle = document.querySelector(`.toggle-menu`);

    const mobileMenu = document.querySelector(`.mobile-menu`);

    menuToggle.addEventListener(`click`, () => {
        if(mobileMenu.classList.contains(`open`)){
            mobileMenu.classList.remove(`open`);
        } else{
            mobileMenu.classList.add(`open`);
        }

        // CHANGING AN IMG
        const heroImg = document.querySelector(".hero img");

        setInterval(() => {
            heroImg.classList.add("fade");
            setTimeout(() => {
                if (heroImg.getAttribute("src") === "./img/kitten-photo.jpeg") {
                    heroImg.setAttribute("src", "./img/puppy-photo.jpeg");
                    heroImg.setAttribute("alt", "Puppy photo");
                } else {
                    heroImg.setAttribute("src", "./img/kitten-photo.jpeg");
                    heroImg.setAttribute("alt", "Kitty photo");
                }
                heroImg.classList.remove("fade");
            }, 300);
            //
        }, 3000);
    });


})();