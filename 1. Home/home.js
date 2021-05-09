function initMap() {
  var location = {lat: -25.363,lng: 131.044};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map,
    title: "Hello World!",
  });
} 
