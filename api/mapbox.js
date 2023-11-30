

import {keys} from "../js/keys.js";


/**
 * Create a mapbox map
* @param {string} elementId - the id of the element to put the map in
* @param {number[]} coordinates - the coordinates of the map, [lng, lat]
* @returns {mapboxgl.Map} - the mapbox map
*/
export const createMap = (elementId, coordinates) => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: elementId, // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 16,
        speed: 2,
    });
    return map;
};

/**
 * Get the coordinates of a location using the Mapbox Geocoding API
 * @param {*} searchText - the location to search for
 * @returns {number[]} - the coordinates of the location, [lng, lat]
 */
export const getCoordinates = async (searchText) =>{
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
    console.log(data.features[0].center);
    return data.features[0].center;
}

/**
 * Get the address of a location using the Mapbox Geocoding API
 * @param {number} lng - the longitude of the location
 * @param {number} lat - the latitude of the location
 * @returns {string} - the address of the location
 */
export const getAddress = async (lng, lat) => {
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

/**
 * Handle the end of a marker drag event
 * @param {Event} e - the event object
 * @param {mapboxgl.Map} map - the map to add the marker to
 * @returns {void}
 */
export const handleDragEnd = async (e, map) =>{
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
    return address;

}

/**
 * Create a marker on the map
 * @param {object} options - the options for the marker
 * @param {mapboxgl.Map} options.map - the map to add the marker to
 * @param {number[]} options.coordinates - the coordinates of the marker, [lng, lat]
 * @param {boolean} [options.draggable=false] - *optional* whether the marker should be draggable
 * @param {function} [options.dragCallback=null] - *optional* the function to call when the marker is dragged
 * @param {string} [options.popupHTML=null] - *optional* the HTML to put in the popup
 * @returns {mapboxgl.Marker} - the marker
 */
export const createMarker = ({ map, coordinates, draggable = false, dragCallback = null, popupHTML = null }) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    let popup = null;
    if (popupHTML) {
        popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML);
    }
    if (popup) {
        marker.setPopup(popup);
    }
    if (draggable) {
        marker.setDraggable(true);
    }
    if (dragCallback) {
        marker.on("dragend", (e) => {
            dragCallback(e, map);
        });
    }
    return marker;
};
