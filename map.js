'use strict'        

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiY25zMjE0MSIsImEiOiJjanNtZW5veWowMHM5NDRtcnRzYm9lZDBzIn0.gMWIq38Xalt5MBIy2n-6bQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.96024, 40.80877],
    zoom: 1
})