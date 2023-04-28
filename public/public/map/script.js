var map = L.map("map").setView([28.6316512, 77.4443768], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var popup = L.popup();

function f() {
  return document.querySelector(".timing").value;
}

function onMapClick(e) {
  var marker = L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .bindPopup(f())
    .openPopup();
}


map.on("click", onMapClick);

const btn = document.querySelector(".btn");
// $("#submitForm").click(function() {
//   alert("The Form has been Submitted.");
// });
