

import{getPokemon, getPokemonAll} from "./pokemon-api.js";


(async()=>{
    const pokemon = await getPokemon("charmander")
        console.log(`This is Charmander =>`,pokemon);

    const list = await getPokemonAll(0, 10);
       console.log(`This is a detailed list of pokemon i can modify which ones are shown and how many are shown =>`,list);



})();