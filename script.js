const originalX = -4.25;
const originalY = 55.86;
const defaultZoom = 12;
let x;
let y;
let userX;
let userY;
const apiKey = "f0241f4c7ee1c263fba5c33fa21ea60a"; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap

function init() {


  map = new OpenLayers.Map("basicMap");
  const mapnik = new OpenLayers.Layer.OSM();
  const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  x = originalX;
  y = originalY;

  requestLocation();

  const position = new OpenLayers.LonLat(x, y).transform(fromProjection, toProjection);
  document.getElementById("xCoord").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      setCoords();
    }
  });

  document.getElementById("yCoord").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      setCoords();
    }
  });

  map.addLayer(mapnik);
  map.setCenter(position, defaultZoom);
}

function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      userX = position.coords.longitude;
      userY = position.coords.latitude;
    }, function (error) {
      console.error("Error getting user location:", error);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  const markers = new OpenLayers.Layer.Markers("Markers");
  map.addLayer(markers);

  //// TEST MARKER ////


  //// BUBBLE SOCCER MARKER ////

  const bubbleSoccerMarker = coordTransform(-4.282820, 55.872500);
  const bubbleSoccerIcon = new OpenLayers.Icon('redMarker.png');
  const bubbleSoccerObj = new OpenLayers.Marker(bubbleSoccerMarker, bubbleSoccerIcon);
  markers.addMarker(bubbleSoccerObj);

  bubbleSoccerObj.events.register(/*'touchstart'*/ 'touchstart', bubbleSoccerObj, function (evt) {
    const popup = document.getElementById("bubbleSoccerPopUp");
    const mapDiv = document.getElementById("basicMap");
    const markerPosition = map.getPixelFromLonLat(bubbleSoccerObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('bubbleSoccerPopUp');
  });

  //// BUNGEE JUMP MARKER ////

  const bungeeJumpMarker = coordTransform(-4.305230, 55.865790);
  const bungeeJumpIcon = new OpenLayers.Icon('redMarker.png');
  const bungeeJumpObj = new OpenLayers.Marker(bungeeJumpMarker, bungeeJumpIcon);
  markers.addMarker(bungeeJumpObj);

  bungeeJumpObj.events.register(/*'touchstart'*/ 'touchstart', bungeeJumpObj, function (evt) {
    const popup = document.getElementById("bungeePopUp");
    const mapDiv = document.getElementById("basicMap");
    const markerPosition = map.getPixelFromLonLat(bungeeJumpObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('bungeePopUp');
  });

  //// CLIMBING CENTRE MARKER ////

  const climbingCentreMarker = coordTransform(-4.323360, 55.847679);
  const climbingCentreIcon = new OpenLayers.Icon('redMarker.png');
  const climbingCentreObj = new OpenLayers.Marker(climbingCentreMarker, climbingCentreIcon);
  markers.addMarker(climbingCentreObj);

  climbingCentreObj.events.register(/*'touchstart'*/ 'touchstart', climbingCentreObj, function (evt) {
    const popup = document.getElementById('climbingPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(climbingCentreObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('climbingPopUp');
  });

  //// FLIP OUT MARKER ////

  const flipOutMarker = coordTransform(-4.230890, 55.834180);
  const flipOutIcon = new OpenLayers.Icon('redMarker.png');
  const flipOutObj = new OpenLayers.Marker(flipOutMarker, flipOutIcon);
  markers.addMarker(flipOutObj);

  flipOutObj.events.register(/*'touchstart'*/ 'touchstart', flipOutObj, function (evt) {
    const popup = document.getElementById('flipOutPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(flipOutObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('flipOutPopUp');
  });

  //// LASER QUEST MARKER ////

  const laserQuest = coordTransform(-4.283, 55.85);
  const laserQuestMarker = new OpenLayers.Icon('redMarker.png');
  const laserQuestObj = new OpenLayers.Marker(laserQuest, laserQuestMarker)
  markers.addMarker(laserQuestObj);

  laserQuestObj.events.register(/*'touchstart'*/ 'touchstart', laserQuestObj, function (evt) {
    const popup = document.getElementById('laserQuestPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(laserQuestObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('laserQuestPopUp');
  });

  //// ROLLER STOP MARKER ////

  const rollerStopMarker = coordTransform(-4.282860, 55.851920);
  const rollerStopIcon = new OpenLayers.Icon('redMarker.png');
  const rollerStopObj = new OpenLayers.Marker(rollerStopMarker, rollerStopIcon);
  markers.addMarker(rollerStopObj);

  rollerStopObj.events.register(/*touchstart*/ 'touchstart', rollerStopObj, function (evt) {
    const popup = document.getElementById('rollerStopPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(rollerStopObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('rollerStopPopUp');
  });

  //// TOP GOLF MARKER ////

  const topGolfMarker = coordTransform(-4.201366, 55.831256);
  const topGolfIcon = new OpenLayers.Icon('redMarker.png');
  const topGolfObj = new OpenLayers.Marker(topGolfMarker, topGolfIcon);
  markers.addMarker(topGolfObj);

  topGolfObj.events.register(/*touchstart*/ 'touchstart', topGolfObj, function (evt) {
    const popup = document.getElementById('topGolfPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(topGolfObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('topGolfPopUp');
  });

  //// 3D HEALTH MARKER ////

  const threeDHealthMarker = coordTransform(-4.2595, 55.866);
  const TDHealthIcon = new OpenLayers.Icon('redMarker.png');
  const TDHealthObj = new OpenLayers.Marker(threeDHealthMarker, TDHealthIcon);
  markers.addMarker(TDHealthObj);

  TDHealthObj.events.register(/*touchstart*/ 'touchstart', TDHealthObj, function (evt) {
    const popup = document.getElementById('3dhealthPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(TDHealthObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('3dhealthPopUp');
  });

  //// BOTANIC MARKER ////

  const botanicMarker = coordTransform(-4.29112, 55.88001);
  const botanicIcon = new OpenLayers.Icon('redMarker.png');
  const botanicObj = new OpenLayers.Marker(botanicMarker, botanicIcon);
  markers.addMarker(botanicObj);

  botanicObj.events.register(/*touchstart*/ 'touchstart', botanicObj, function (evt) {
    const popup = document.getElementById('botanicPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(botanicObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('botanicPopUp');
  });

  //// CG WELLNESS MARKER ////

  const cgWellnessMarker = coordTransform(-4.24874, 55.85905);
  const cgWellnessIcon = new OpenLayers.Icon('redMarker.png');
  const cgWellnessObj = new OpenLayers.Marker(cgWellnessMarker, cgWellnessIcon);
  markers.addMarker(cgWellnessObj);

  cgWellnessObj.events.register(/*touchstart*/ 'touchstart', cgWellnessObj, function (evt) {
    const popup = document.getElementById('cgWellnessPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(cgWellnessObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('cgWellnessPopUp');
  });

  //// CROSSFIT MARKER ////

  const crossfitMarker = coordTransform(-4.25969, 55.854689);
  const crossfitIcon = new OpenLayers.Icon('redMarker.png');
  const crossfitObj = new OpenLayers.Marker(crossfitMarker, crossfitIcon);
  markers.addMarker(crossfitObj);

  crossfitObj.events.register(/*touchstart*/ 'touchstart', crossfitObj, function (evt) {
    const popup = document.getElementById('crossfitPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(crossfitObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('crossfitPopUp');
  });

  //// EXTREME GYM MARKER ////

  const extremeGymMarker = coordTransform(-4.22809, 55.85254);
  const extremeGymIcon = new OpenLayers.Icon('redMarker.png');
  const extremeGymObj = new OpenLayers.Marker(extremeGymMarker, extremeGymIcon);
  markers.addMarker(extremeGymObj);

  extremeGymObj.events.register(/*touchstart*/ 'touchstart', extremeGymObj, function (evt) {
    const popup = document.getElementById('extremeGymPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(extremeGymObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('extremeGymPopUp');
  });

  //// F45 TRAINING MARKER ////

  const ffftrainingMarker = coordTransform(-4.261543, 55.861928);
  const ffftrainingIcon = new OpenLayers.Icon('redMarker.png');
  const ffftrainingObj = new OpenLayers.Marker(ffftrainingMarker, ffftrainingIcon);
  markers.addMarker(ffftrainingObj);

  ffftrainingObj.events.register(/*touchstart*/ 'touchstart', ffftrainingObj, function (evt) {
    const popup = document.getElementById('f45PopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(ffftrainingObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('f45PopUp');
  });

  //// THE SPA GYM MARKER ////

  const ginSpaMarker = coordTransform(-4.25028, 55.85968);
  const ginSpaIcon = new OpenLayers.Icon('redMarker.png');
  const ginSpaObj = new OpenLayers.Marker(ginSpaMarker, ginSpaIcon);
  markers.addMarker(ginSpaObj);

  ginSpaObj.events.register(/*touchstart*/ 'touchstart', ginSpaObj, function (evt) {
    const popup = document.getElementById('ginSpaPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(ginSpaObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('ginSpaPopUp');
  });

  //// GLASGOW GREEN MARKER ////

  const greenMarker = coordTransform(-4.23506, 55.84947);
  const greenIcon = new OpenLayers.Icon('redMarker.png');
  const greenObj = new OpenLayers.Marker(greenMarker, greenIcon);
  markers.addMarker(greenObj);

  greenObj.events.register(/*touchstart*/ 'touchstart', greenObj, function (evt) {
    const popup = document.getElementById('greenPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(greenObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('greenPopUp');
  });

  //// IRON SKULL MARKER ////

  const ironSkullMarker = coordTransform(-4.26869, 55.85929);
  const ironSkullIcon = new OpenLayers.Icon('redMarker.png');
  const ironSkullObj = new OpenLayers.Marker(ironSkullMarker, ironSkullIcon);
  markers.addMarker(ironSkullObj);

  ironSkullObj.events.register(/*touchstart*/ 'touchstart', ironSkullObj, function (evt) {
    const popup = document.getElementById('ironSkullPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(ironSkullObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('ironSkullPopUp');
  });

  //// KELVINGROVE MARKER ////

  const kelvingroveMarker = coordTransform(-4.28339, 55.86921);
  const kelvingroveIcon = new OpenLayers.Icon('redMarker.png');
  const kelvingroveObj = new OpenLayers.Marker(kelvingroveMarker, kelvingroveIcon);
  markers.addMarker(kelvingroveObj);

  kelvingroveObj.events.register(/*touchstart*/ 'touchstart', kelvingroveObj, function (evt) {
    const popup = document.getElementById('kelvingrovePopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(kelvingroveObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('kelvingrovePopUp');
  });

  //// OCHO SPA MARKER ////

  const ochoSpaMarker = coordTransform(-4.2568935, 55.87312);
  const ochoSpaIcon = new OpenLayers.Icon('redMarker.png');
  const ochoSpaObj = new OpenLayers.Marker(ochoSpaMarker, ochoSpaIcon);
  markers.addMarker(ochoSpaObj);

  ochoSpaObj.events.register(/*touchstart*/ 'touchstart', ochoSpaObj, function (evt) {
    const popup = document.getElementById('ochoSpaPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(ochoSpaObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('ochoSpaPopUp');
  });

  //// PIPEWORKS MARKER ////

  const pipeworksMarker = coordTransform(-4.251915, 55.855739);
  const pipeworksIcon = new OpenLayers.Icon('redMarker.png');
  const pipeworksObj = new OpenLayers.Marker(pipeworksMarker, pipeworksIcon);
  markers.addMarker(pipeworksObj);

  pipeworksObj.events.register(/*touchstart*/ 'touchstart', pipeworksObj, function (evt) {
    const popup = document.getElementById('pipeworksPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(pipeworksObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('pipeworksPopUp');
  });

  //// POLLOK PARK MARKER ////

  const pollokMarker = coordTransform(-4.31253, 55.83113);
  const pollokIcon = new OpenLayers.Icon('redMarker.png');
  const pollokObj = new OpenLayers.Marker(pollokMarker, pollokIcon);
  markers.addMarker(pollokObj);

  pollokObj.events.register(/*touchstart*/ 'touchstart', pollokObj, function (evt) {
    const popup = document.getElementById('pollokPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(pollokObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('pollokPopUp');
  });

  //// PURE GYM BATH ST MARKER ////

  const pureGymMarker = coordTransform(-4.25970, 55.86527);
  const pureGymIcon = new OpenLayers.Icon('redMarker.png');
  const pureGymObj = new OpenLayers.Marker(pureGymMarker, pureGymIcon);
  markers.addMarker(pureGymObj);

  pureGymObj.events.register(/*touchstart*/ 'touchstart', pureGymObj, function (evt) {
    const popup = document.getElementById('pureGymPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(pureGymObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('pureGymPopUp');
  });

  //// PURE SPA MARKER ////

  const pureSpaMarker = coordTransform(-4.25430, 55.86317);
  const pureSpaIcon = new OpenLayers.Icon('redMarker.png');
  const pureSpaObj = new OpenLayers.Marker(pureSpaMarker, pureSpaIcon);
  markers.addMarker(pureSpaObj);

  pureSpaObj.events.register(/*touchstart*/ 'touchstart', pureSpaObj, function (evt) {
    const popup = document.getElementById('pureSpaPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(pureSpaObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('pureSpaPopUp');
  });

  //// RUCHILL PARK MARKER ////

  const ruchillMarker = coordTransform(-4.27261, 55.88587);
  const ruchillIcon = new OpenLayers.Icon('redMarker.png');
  const ruchillObj = new OpenLayers.Marker(ruchillMarker, ruchillIcon);
  markers.addMarker(ruchillObj);

  ruchillObj.events.register(/*touchstart*/ 'touchstart', ruchillObj, function (evt) {
    const popup = document.getElementById('ruchillPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(ruchillObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('ruchillPopUp');
  });

  //// SPA IN THE CITY MARKER ////

  const spaInTheCityMarker = coordTransform(-4.269253, 55.86046);
  const spaInTheCityIcon = new OpenLayers.Icon('redMarker.png');
  const spaInTheCityObj = new OpenLayers.Marker(spaInTheCityMarker, spaInTheCityIcon);
  markers.addMarker(spaInTheCityObj);

  spaInTheCityObj.events.register(/*touchstart*/ 'touchstart', spaInTheCityObj, function (evt) {
    const popup = document.getElementById('spaInTheCityPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(spaInTheCityObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('spaInTheCityPopUp');
  });

  //// WATERSPORTS MARKER ////

  const watersportsMarker = coordTransform(-4.24785, 55.87353);
  const watersportsIcon = new OpenLayers.Icon('redMarker.png');
  const watersportsObj = new OpenLayers.Marker(watersportsMarker, watersportsIcon);
  markers.addMarker(watersportsObj);

  watersportsObj.events.register(/*touchstart*/ 'touchstart', watersportsObj, function (evt) {
    const popup = document.getElementById('watersportsPopUp');
    const mapDiv = document.getElementById('basicMap');
    const markerPosition = map.getPixelFromLonLat(watersportsObj.lonlat);
    popup.style.left = (markerPosition.x + mapDiv.offsetLeft) + "px";
    popup.style.top = (markerPosition.y + mapDiv.offsetTop) + "px";
    popUp('watersportsPopUp');
  });

}


function setCoords() {
  const newX = parseFloat(document.getElementById("xCoord").value);
  const newY = parseFloat(document.getElementById("yCoord").value);

  if (!isNaN(newX) && !isNaN(newY)) {
    x = newX;
    y = newY;
    const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    const position = new OpenLayers.LonLat(x, y).transform(fromProjection, toProjection);
    map.setCenter(position, defaultZoom);
  } else {
    alert("Please enter valid coordinates.");
  }
}

function resetCoords() {
  const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  x = originalX;
  y = originalY;
  const position = new OpenLayers.LonLat(x, y).transform(fromProjection, toProjection);
  map.setCenter(position, defaultZoom);
}

function searchActivities() {
  const input = document.getElementById("input").value.toUpperCase();
  const li = document.getElementById("activities").getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function getUserLocation() {
  if (userX != null && userY != null) {
    const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    x = userX;
    y = userY;
    const position = new OpenLayers.LonLat(x, y).transform(fromProjection, toProjection);
    map.setCenter(position, defaultZoom);
  }
}

function getWeather() {
  // Construct the API URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${x}&appid=${apiKey}&units=metric`;
  const outdoorText = "It's warm outside! Would you like to look at outdoor activities?";
  const indoorText = "Oh no! It's raining. Would you like to look at indoor activities?";

  // Fetch the weather data
  fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          console.log("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Process the weather data
        console.log("Weather Data:", data);
        const weatherCondition = data.weather[0].main.toLowerCase();
        const temperature = data.main.temp;
        let weatherInfo = `
        Location: ${data.name}<br>
        Weather: ${data.weather[0].main}<br>
        Temperature: ${data.main.temp}C<br>
        Humidity: ${data.main.humidity}%
      `;
        let message = "";
        // Determine message and activityType based on weather condition
        if(weatherCondition.includes("rain") || weatherCondition.includes("storm")){
          message = indoorText;
        } else if ((weatherCondition.includes("clear") || weatherCondition.includes("clouds")) && temperature > 12){
          message = outdoorText;
        } else {
          message = "The weather is moderate. Enjoy your day!";
        }

        weatherInfo += message;
        // Display weather info
        document.getElementById("weatherInfo").innerHTML = weatherInfo;
      })
      .catch(error => {
        console.error("There was a problem fetching the weather data:", error);
        // Handle errors here
      });
}


function toggleWeather() {
  const weatherInfoContainer = document.getElementById("weatherInfoContainer");
  const toggleWeatherButton = document.getElementById("toggleWeatherButton");
  if (weatherInfoContainer.style.display === "none") {
    weatherInfoContainer.style.display = "block"; // Show weather info container
    // Fetch weather information when the container is shown (optional)
    getWeather(); // Assuming latitude and longitude are global variables or can be accessed
    toggleWeatherButton.textContent = "Hide Weather"; // Change button text to "Hide Weather"
  } else {
    weatherInfoContainer.style.display = "none"; // Hide weather info container
    toggleWeatherButton.textContent = "Show Weather"; // Change button text to "Show Weather"
  }
}

function coordTransform(lon, lat) {
  const lonLat = new OpenLayers.LonLat(lon, lat);
  const fromProjection = new OpenLayers.Projection("EPSG:4326");
  const toProjection = new OpenLayers.Projection("EPSG:900913");
  return lonLat.transform(fromProjection, toProjection);
}

//// OPENS POP UP ////

function popUp(id) {
  const popup = document.getElementById(id);
  popup.classList.toggle("show");
  // Close all popups except the one with the specified id
  const popups = document.querySelectorAll('.popUp');
  popups.forEach(popupElement => {
    if (popupElement.id !== id) {
      popupElement.classList.remove('show');
    }
  });
  // Toggle map panning based on the presence of 'show' class
  preventMapPanning(popup.classList.contains("show"));
}

//// CLOSES POP UP ////

function closePopUp(id) {
  const popup = document.getElementById(id);
  popup.classList.remove("show");
  preventMapPanning(false);
}
//// STOPS MAP FROM MOVING WHEN POP UP IS ACTIVE ////

function preventMapPanning(prevent) {
  const mapDiv = document.getElementById('basicMap');
  if (prevent) {
    mapDiv.style.pointerEvents = 'none';
  } else {
    mapDiv.style.pointerEvents = 'auto';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if the splash screen was already shown
  if (sessionStorage.getItem('splashShown') === 'true') {
    document.getElementById('splash-screen').style.display = 'none';
  } else {
    setTimeout(() => {
      document.getElementById('splash-screen').style.display = 'none';
      // Set the flag in sessionStorage
      sessionStorage.setItem('splashShown', 'true');
    }, 3000); // Adjust the time as needed
  }
});

//// LIVE WALKING PACER ////

const startTracking = function() {
  isTracking = true;
  startTime = new Date();
  totalDistance = 0;
  getCurrentLocation();
  document.getElementById('start').innerText = 'Stop';
}

const stopTracking = function() {
  isTracking = false;
  const stopTime = new Date();
  const walkTime = (stopTime - startTime) / (1000 * 60);
  totalWalkTime += walkTime;
  calculateAveragePace();
  document.getElementById('start').innerText = 'Start';
}

const updateLiveDistance = function(position) {
  if (isTracking) {
    const currentLocation = position.coords;
    if (lastLocation) {
      const distanceIncrement = calculateDistance(lastLocation, currentLocation);
      totalDistance += distanceIncrement;
      document.getElementById('live-distance').innerText = `Live Distance: ${totalDistance.toFixed(2)} metres`;
    } else if (!lastLocation && startLocation) {
      const initialDistance = calculateDistance(startLocation, currentLocation);
      totalDistance += initialDistance;
      document.getElementById('live-distance').innerText = `Live Distance: ${totalDistance.toFixed(2)} metres`;
    }
    lastLocation = currentLocation;
  }
};

const calculateAveragePace = function () {
  if (totalDistance > 0 && totalWalkTime > 0) {
    const averagePace = totalWalkTime / (totalDistance / 1000);
    document.getElementById('average-pace').innerText = `Average Pace: ${averagePace.toFixed(2)} mins/km`;
  } else {
    document.getElementById('average-pace').innerText = 'Average Pace: -- mins/km';
  }
}

const getCurrentLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      startLocation = position.coords;
      navigator.geolocation.watchPosition(updateLiveDistance);
    });
  } else {
    console.log("Geolocation not supported");
  }
}

const calculateDistance = function (startLocation, endLocation) {
  const R = 6371;
  const dLat = (endLocation.latitude - startLocation.latitude) * (Math.PI / 180);
  const dLon = (endLocation.longitude - startLocation.longitude) * (Math.PI / 180);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(startLocation.latitude * (Math.PI / 180)) * Math.cos(endLocation.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2* Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance * 1000;
}

navigator.geolocation.watchPosition(updateLiveDistance);

document.getElementById('start').addEventListener('click', function () {
  if (!isTracking) {
    startTracking()
  } else {
    stopTracking();
  }
});

function filterActivities(category) {
  const activities = document.querySelectorAll('#activities ul li');
  const outdoorContainer = document.getElementById('outdoor-container');
  activities.forEach(function(activity) {
    if (activity.classList.contains(category)) {
      activity.style.display = 'block';
      if(activity.classList.contains('outdoor')){
        outdoorContainer.style.display = 'block';
      }
    }
    else {
      activity.style.display = 'none';
      outdoorContainer.style.display = 'none';
    }
  });
}
