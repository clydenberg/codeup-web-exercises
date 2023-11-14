//MAIN
(()=>{
    const addBtn = document.querySelector(`#addBox`);
    const boxContainer = document.querySelector(`#boxes`);
    addBtn.addEventListener(`click`, e=>{
       const box = document.createElement(`div`);
       box.classList.add(`box`);
       box.innerHTML = `<span>${document.querySelectorAll(`.box`).length + 1}</span>`;
       box.addEventListener('click', e=>{
           box.remove();
       });
       boxContainer.appendChild(box);

        //DO NOT
        // boxContainer.innerHTML += `<div class="box"><div></div>`;
    });


})();