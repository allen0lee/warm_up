var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

var div = document.querySelector('div');

var toRadians =  function(degrees) {
    return degrees * Math.PI / 180;
}

var calLatLonDistance = function(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2-lat1);
    var Δλ = toRadians(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d;
}

var startPointLat = startPoint.location.lat;
var startPointLon = startPoint.location.long;

// var d1 = calLatLonDistance(startPointLat, startPointLon, results[5].location.lat,
//     results[5].location.long);
// console.log(d1);

var destinationDistances = [];

results.forEach(destination => {
    var d = calLatLonDistance(startPointLat, startPointLon, destination.location.lat, 
        destination.location.long);
    destinationDistances.push({name: destination.name, distance: d});
});

// debugger

// destinationDistances.sort(
//     function (a, b) {
//         return a.distance - b.distance;
//     }
// );

// sort objects by values
destinationDistances.sort((a, b) => a.distance - b.distance);

console.log(destinationDistances);

// print location from cloest to farest
destinationDistances.forEach(destination => {
    var p = document.createElement('p');
    p.textContent = destination.name;
    div.append(p);
});

