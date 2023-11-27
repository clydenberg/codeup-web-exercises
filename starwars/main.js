

const getPerson = (id = 1) =>{
    const url = `https://swapi.dev/api/people/${id}`;
    const options = {
        method : "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then(response=>response.json())
        .then(person =>{
            return person;
        })
        .catch(error=>{
            return error;
        })
}

const getFilm = (id = 1) => {
    const url = `https://swapi.dev/api/films/${id}`;
    const options = {
        method : "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch (url, options)
        .then(response => response.json())
        .catch((error)=>{
            return error
        })
}


(async()=>{

    const person = await getPerson(2);
    console.log(person);
    const filmId = person.films[0].split(`/`)[5];
    const film = await getFilm(filmId);
    console.log(film);

    // getPerson(2).then((person) => {
    //         const filmId = person.films[0].split(`/`)[5];
    //         getFilm(filmId).then((film)=>{
    //         console.log(person);
    //         console.log(film);
    //         });
    //     });

})();