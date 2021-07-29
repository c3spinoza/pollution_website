//Map

//Initialization of Map
var nasvilleMap = L.map('mapid', {
  center: [36.174465, -86.767960], // Cordinates of the center of Nasville
  zoom: 11, //Zoom from the center
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g', {
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  id: 'mapbox/streets-v11',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox/">Mapbox</a>', //Deal with the Source of the Map
  accessToken: 'pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g' //API Key (also above)
}).addTo(mymap);