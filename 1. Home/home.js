//Map
var mymap = L.map('map').setView([51.505, -0.09], 13);
//Map's Source
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox/">Mapbox</a>',
  //Map Additional Attributes
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g'
}).addTo(mymap);