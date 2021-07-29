//Map

//Initialization of Map
var nashvilleMap = L.map('map', {
  center: [36.174465, -86.767960],
  zoom: 11,
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g', {
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  id: 'mapbox/streets-v11',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox/">Mapbox</a>',
  accessToken: 'pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g'
}).addTo(nashvilleMap);

//Markers
//VU
var vu = L.marker([36.144444, -86.802778], {
  riseOnHover: true
}).addTo(nashvilleMap);
vu.bindPopup("Vanderbilt University").openPopup();
//BNA
var bna = L.marker([36.126111, -86.677222], {
  riseOnHover: true
}).addTo(nashvilleMap);
bna.bindPopup("Nashville International Airport").openPopup();
//MNDES
var mndes = L.marker([36.158056, -86.770278]).addTo(nashvilleMap);
mndes.bindPopup("Metro Nashville District Energy System").openPopup();
//CGA
var cga = L.marker([36.181944, -86.873333]).addTo(nashvilleMap);
cga.bindPopup("Carlex Glass of America").openPopup();