

import {keys} from "../js/keys.js";

/** *
 * gets a forecast from openWeather API
 * @param {number} lat - latitude of the coordinates
 * @param {number} lng - longitude of the coordinates
 * @returns {Promise} - a promise that resolves to the forecast data
 */
export const getForecast = async (lat, lng) => {
    if (Array.isArray(lat)) {
        lng = lat[0];
        lat = lat[1];
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openWeather}`
    const options = {
        method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
};

