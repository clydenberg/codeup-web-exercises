

const getTools = () =>{
    const url = "../data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch (url,options).then((response)=>response.json())
        .catch(error=>console.log(error));
};

const renderToolCard = (tool) =>{
    const sellCard = document.querySelector(`.theSellCard`);
    const toolCard = document.createElement(`div`);
    toolCard.classList.add(`card`, `d-flex`, `flex-column`, `align-items-center`, `p-2`, `gap-3`);
    toolCard.innerHTML= `
    
    <div class="d-flex toolCardPictures">
        <img src="${tool.img}" alt="tool-picture" class="toolPic">
    </div>

    <div class="toolTitle">
        <h3 class="d-flex justify-content-center flex-grow-1">${tool.title}</h3>
    </div>

    <div class="d-flex flex-grow-1 gap-1 toolDesc">
        <ul class="d-flex flex-column align-items-start toolProps gap-1">
            <li class="d-flex cardDesc"><h5>tool price:</h5></li>
            <li class="d-flex cardDesc"><h5>categories:</h5></li>
            <li class="d-flex cardDesc"><h5>Inventory:</h5></li>
        </ul>
        <ul class="d-flex flex-column align-items-start toolPropsValues gap-1">
            <li class="cardPropValues">${tool.price}</li>
            <li class="cardPropValues">${tool.categories}</li>
            <li class="cardPropValues">${tool.quantity}</li>
        </ul>
    </div>
    
    `;
    toolCard.addEventListener(`click`,()=>{
        renderSellCard();
    });
    const toolBox = document.querySelector(`.ourToolBox`);
    toolBox.appendChild(toolCard);

};

const renderSellCard = () =>{
    const sellCard = document.createElement(`div`);
    sellCard.classList.add(`col`, `col-12`, `d-flex`, `theSellCard`, `justify-content-end`);
    sellCard.innerHTML=`
        <button class="exitSellCard">
                    x
        </button>
        <form action="" method="get"></form>
    `;
    const exitSellCard = document.querySelector(`.exitSellCard`);
    exitSellCard.addEventListener(`click`, ()=>{
        sellCard.remove();
    });
    const storeForm = document.querySelector(`.storeForm`);
    storeForm.appendChild(sellCard);
}
// next goal when I come back is to create a cart form that pops up when you click on the product.


//main
(async()=>{
    const tools = await getTools();
    console.log(tools);
    for (let tool of tools){
        renderToolCard(tool);
    }


    // const exitSellCard = document.querySelector(`.exitSellCard`);
    // const sellCard = document.querySelector(`.theSellCard`)
    //
    // exitSellCard.addEventListener(`click`, ()=>{
    //     sellCard.classList.remove(`menuCard`);
    // })

})();

