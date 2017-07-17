/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
// import {getFilms} from './movies'

// const actions = {
//     getFilms:getFilms
// };
// module.exports = actions;



import axios from 'axios';
export const getFilms = () =>  {
    console.log("fetch data")
    const films = () => {return axios.get("https://swapi.co/api/films/").then(res => {return res.data.results})};
    return {
        type: "FETCH_FILMS",
        payload: films
    };
}
