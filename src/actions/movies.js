import axios from 'axios';
export function getFilms() {
    console.log("fetch data")
    const films = axios.get("https://swapi.co/api/films/").then(res => {const films = res.data.results; return films});
    return {
        type: "FETCH_FILMS",
        payload: films
    };
}
