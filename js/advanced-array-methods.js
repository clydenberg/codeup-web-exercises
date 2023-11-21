import {NETFLIX_TITLES} from "../data/netflix-titles.js";

console.log(NETFLIX_TITLES);

(()=>{

// const sciFiTitles = [];
//
//     for(let title of NETFLIX_TITLES){
//         if(title.listed_in.includes(`Sci-Fi`)){
//             sciFiTitles.push(title);
//         }
//     }
//     console.log(sciFiTitles);


    //THE FILTER METHOD

const scifiTitles = NETFLIX_TITLES.filter((title, index, array)=>{
    if(!title.listed_in){
        return false;
    }
    return title.listed_in.includes(`Sci-Fi`)
});

    //THE FIND METHOD

const theNextGeneration = NETFLIX_TITLES.find(movie =>{
    return movie.title.toLowerCase() === `star trek: the next generation`.toLowerCase();
})
    console.log(theNextGeneration);

    //THE SOME METHOD

const hasStarTrek = NETFLIX_TITLES.some((movie)=>{
    return movie.title.toLowerCase().includes(`star trek`) && movie.type.toLowerCase() === `movie`;
});

if(hasStarTrek){
    console.log(`it has star trek movies.`)
}

    //MAP METHOD

const betterNetflixTitles = NETFLIX_TITLES.map((movie, index)=>{
    const betterObject = {
        id: index + 1,
        title: movie.title,
        type: movie.type,
        director: movie.director,
        cast: movie.cast && movie.cast.split(`, `),
        date_added: movie.date_added,
        release_year: movie.release_year,
        rating: movie.rating,
        duration: movie.duration,
        categories: movie.listed_in?.split(`, `),
        desc: movie.description
    };
    return betterObject;
});
console.log(betterNetflixTitles);

    //THE REDUCE METHOD

// const ActionStalloneMovies = betterNetflixTitles.reduce((accumulator, movie, index, array)=>{
//     if(movie.categories?.includes(`Action & Adventure`) && movie.cast?.includes(`Sylvester Stallone`)){
//         return `${movie.title}, ${accumulator}`
//     } else{
//         return accumulator;
//     }
// }, ``);
//
// console.log(ActionStalloneMovies);

const longestMovie2 = NETFLIX_TITLES.reduce((accumulator, title, index, array)=>{
    if(title.type === `movie`){
        if(parseFloat(title.duration?.split(` `)[0]) > parseFloat(accumulator.duration?.split(` `)[0])){
            return title;
        }
        else {
            return  accumulator
        }
    }
    else{
        return accumulator;
    }

}, NETFLIX_TITLES[0]);

console.log(`this is the longest move =>`,longestMovie2);


})();