

import { getForecast } from './openWeather.js';
import {createMap, getAddress, getCoordinates, handleDragEnd, createMarker} from "./mapbox.js";

const createWeatherCard = (forecast) => {
    const theDate = new Date(forecast.dt * 1000);
    const formattedDate = theDate.toLocaleDateString(`en-US`, {
        weekday: `long`,
        month: `long`,
        day: `numeric`,
        year: `numeric`,
    });

    const icon = forecast.weather[0].icon;
    const iconSRC = `https://openweathermap.org/img/wn/${icon}.png`;
    const weatherCard = document.createElement(`div`);
    weatherCard.classList.add(`weatherCard`);
    weatherCard.innerHTML = `
                <div class="weatherCardHeader">
                    <h3 class="weatherCardTitle">${formattedDate}</h3>
                </div>
                
                <div class="iconHolder">
                    <img class="iconImg" src=${iconSRC} alt="">
                </div>
               
                <table>
                    <tr class="d-flex align-items-center statTable">
                        <td class="statistic">Temperature:</td>
                        <td class="statData" id="currentTemp">${forecast.temp.day} &#176 F</td>
                    </tr>
                    <tr class="d-flex align-items-center statTable">
                        <td class="statistic">Feels Like:</td>
                        <td class="statData" id="currentFeelsLike">${forecast.feels_like.day} &#176 F</td>
                    </tr>
                    <tr class="d-flex align-items-center statTable">
                        <td class="statistic">Humidity:</td>
                        <td class="statData" id="currentHumidity">${forecast.humidity} %</td>
                    </tr>
                    <tr class="d-flex align-items-center statTable">
                        <td class="statistic">Wind Speed:</td>
                        <td class="statData" id="currentWindSpeed">${forecast.wind_speed} mph</td>
                    </tr>
                    <tr class="d-flex align-items-center statTable">
                        <td class="statistic">Wind Direction:</td>
                        <td class="statData" id="currentWindDirection">${forecast.wind_deg} &#176</td>
                    </tr>
            `;
    return weatherCard;
}

const renderWeatherCards = (forecasts) => {
    const weatherCards = 4;

    forecasts.forEach((forecast, index) => {
        if( index <= weatherCards){
            const weatherCard = createWeatherCard(forecast);
            const weatherCardsElem = document.querySelector(`#weatherCards`);
            weatherCardsElem.appendChild(weatherCard);
        }
    });
}

const renderSearch = async (map) => {


    const searchValue = document.querySelector(`#address`).value;
    console.log(searchValue);
    const coordinates = await getCoordinates(searchValue);
    map.setCenter(coordinates);
    const forecasts = await getForecast(coordinates);
    const dailyForecasts = forecasts.daily;
    await renderWeatherCards(dailyForecasts);
    const marker = createMarker({
        map,
        coordinates,
        draggable: true,
        dragCallback: handleDragEnd,
        popupHTML: "<p>We live here now.</p>",
    });
    await createCurrentLocationElement(coordinates);
    marker.on(`dragend`, async (e) => {
        const lng = e.target._lngLat.lng;
        const lat = e.target._lngLat.lat;
        const coordinates = [lng, lat];
        console.log(lng, lat);

        const weatherCards = document.querySelectorAll(`.weatherCard`);
        weatherCards.forEach((card)=>{
            card.remove();
        });
        const forecasts = await getForecast(lat, lng);
        const dailyForecasts = forecasts.daily;
        await renderWeatherCards(dailyForecasts);
        const currentLocation = document.querySelector(`.currentLocation`);
        currentLocation.remove();
        await createCurrentLocationElement(coordinates);

    });

}

const createCurrentLocationElement = async(coordinates) => {
    const address = await getAddress(coordinates[0], coordinates[1]);
    const currentLocation = document.createElement(`div`);
    currentLocation.classList.add(`currentLocation`);
    currentLocation.innerHTML = `
        <table>
            <tr class="d-flex gap-5 align-items-center">
                <td class="currentAddress">${address}</td>
            </tr>
        </table>
    `;
    const displayLocation = document.querySelector(`.displayLocation`);
    displayLocation.appendChild(currentLocation);
}

const removeAllMapMarkers = (map) => {
    let markers = document.querySelectorAll(`.mapboxgl-marker`);
    markers.forEach((marker)=>{
        marker.remove();
    });
}

(async()=>{

    const weatherBarBtn = document.querySelector(`#weatherBarBtn`);
    const weatherBar = document.querySelector(`.weatherBar`);
    weatherBarBtn.addEventListener(`click`, ()=>{
        console.log(`clicked`);
        weatherBar.classList.toggle(`open`);
        if(weatherBarBtn.classList.contains(`close`)){
            weatherBarBtn.classList.remove(`close`);
        } else{
            weatherBarBtn.classList.add(`close`);
        }
    })

    const address = await getAddress(-98.6791838, 29.458472);
    const coordinates = await getCoordinates(address);
    const forecasts = await getForecast(coordinates);
    const dailyForecasts = forecasts.daily;
    await renderWeatherCards(dailyForecasts);
    const map = createMap("map", coordinates);
    const marker = createMarker({
        map,
        coordinates,
        draggable: true,
        dragCallback: handleDragEnd,
        popupHTML: "<p>We live here now.</p>",
    });
    console.log(marker);
    await createCurrentLocationElement(coordinates);
    marker.on(`dragend`, async (e) => {
        const lng = e.target._lngLat.lng;
        const lat = e.target._lngLat.lat;
        const coordinates = [lng, lat];
        console.log(lng, lat);

        const weatherCards = document.querySelectorAll(`.weatherCard`);
        weatherCards.forEach((card)=>{
            card.remove();
        });
        const forecasts = await getForecast(lat, lng);
        const dailyForecasts = forecasts.daily;
        await renderWeatherCards(dailyForecasts);
        const currentLocation = document.querySelector(`.currentLocation`);
        currentLocation.remove();
        await createCurrentLocationElement(coordinates);

    });


    const searchBtn = document.querySelector(`.searchAddress`);
    searchBtn.addEventListener(`click`, (event)=>{
        event.preventDefault();
        removeAllMapMarkers();
        const weatherCards = document.querySelectorAll(`.weatherCard`);
        weatherCards.forEach((card)=>{
            card.remove();
        });
        const currentLocation = document.querySelector(`.currentLocation`);
        currentLocation.remove();
        renderSearch(map);
    });


})();