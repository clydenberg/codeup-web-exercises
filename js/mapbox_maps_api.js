

import {keys} from "../js/keys.js";
// console.log(keys.mapbox);

const createMap = (containerElem, coordinates) => {
    const map = new mapboxgl.Map({
        container: containerElem, // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 10, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 16,
        speed: 2,
    });
    return map;
};


const getCoordinates = async (searchText) =>{
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
}

const getAddress = async (lng, lat) => {
    if (Array.isArray(lng)) {
        lat = lng[1];
        lng = lng[0];
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].place_name;
};

const handleDragEnd = async (e, map) =>{
    console.log(e);
    const lng = e.target._lngLat.lng;
    const lat = e.target._lngLat.lat;
    map.flyTo({
        center: [lng, lat],
        zoom: 12,
        speed: 2,
    });
    const address = await getAddress(lng,lat);
    console.log(address);
}

const handleZoomIn = async (map) =>{
    const zoomInBtn = document.querySelector(`.zoomIn`);
    zoomInBtn.addEventListener(`click`, (e)=>{
        const currentZoom = map.getZoom();
       map.flyTo({
           zoom: currentZoom + 1
       })
    });
}

const handleZoomOut = async (map) =>{
    const zoomOutBtn = document.querySelector(`.zoomOut`);
    zoomOutBtn.addEventListener(`click`, (e)=>{
        const currentZoom = map.getZoom();
        map.flyTo({
            zoom: currentZoom - 1
        })
    });
}

const handleUserSearch = () =>{
    const userSearch = document.querySelector(`#address`);
    userSearch.addEventListener(`submit`, async (e)=>{
        e.preventDefault();
        const userSearchText = document.querySelector(`#userSearch`).value;
        console.log(userSearchText);
        const coordinates = await getCoordinates(userSearchText);
        console.log(coordinates);
    });
}

(async()=>{
    const coordinates = await getCoordinates(" 4465 W Flamingo Rd, Las Vegas, NV 89103");
    mapboxgl.accessToken = keys.mapbox;
    const map = createMap("map", coordinates);
    console.log(map);
    const popup = new mapboxgl.Popup().setHTML("<p>UMIYA.</p>");
    const marker = new mapboxgl.Marker({
        draggable: true,
    })
        .setLngLat(coordinates)
        .addTo(map)
        .setPopup(popup);
    marker.on("dragend", (e) => {
        handleDragEnd(e, map);
    });
    await handleZoomIn(map);
    await handleZoomOut(map);

})();