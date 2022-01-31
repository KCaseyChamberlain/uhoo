// WEATHER SECTION STARTS HERE
const weatherBlock = document.createElement('div');
center.appendChild(weatherBlock);
weatherBlock.id = 'weather-block';
weatherBlock.className = 'box columns';

// WEATHER BLOCK COUNTRY
const locationCol = document.createElement('div');
locationCol.id = 'weather-location-col'
locationCol.className = 'box';
weatherBlock.appendChild(locationCol)



const weatherBlockCountry = document.createElement('div');
weatherBlockCountry.id = 'weather-block-country'
weatherBlockCountry.className = 'box';
locationCol.appendChild(weatherBlockCountry)
weatherBlockCountry.textContent="Country"

const weatherBlockLocation = document.createElement('div');
weatherBlockLocation.id = 'weather-block-location'
weatherBlockLocation.className = 'box';
locationCol.appendChild(weatherBlockLocation)
weatherBlockLocation.textContent="Location"




// CURRENT WEATHER COL
const currentWeatherCol = document.createElement('div');
weatherBlock.appendChild(currentWeatherCol);
currentWeatherCol.id = "current-weather-col";
currentWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const currentWeatherDateDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherDateDiv);
currentWeatherDateDiv.id = "current-weather-date-div";
currentWeatherDateDiv.className = 'box  columns is-3';
currentWeatherDateDiv.textContent = "currentWeatherDateDiv has been created!";

const currentWeatherConditionDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherConditionDiv);
currentWeatherConditionDiv.id = "current-weather-condition-div";
currentWeatherConditionDiv.className = 'box  columns is-3';
currentWeatherConditionDiv.textContent = "currentWeatherConditionDiv has been created!";

const currentWeatherIconDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherIconDiv);
currentWeatherIconDiv.id = "current-weather-icon-div";
currentWeatherIconDiv.className = 'box  columns is-3';
currentWeatherIconDiv.textContent = "currentWeatherIconDiv has been created!";

const currentWeatherTempDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherTempDiv);
currentWeatherTempDiv.id = "current-weather-temp-div";
currentWeatherTempDiv.className ='box  columns is-3';
currentWeatherTempDiv.textContent = "currentWeatherTempDiv has been created!";









// TOMORROW WEATHER COL
const twoWeatherCol = document.createElement('div');
weatherBlock.appendChild(twoWeatherCol);
twoWeatherCol.id = "two-weather-col";
twoWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const twoWeatherDateDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherDateDiv);
twoWeatherDateDiv.id = "two-weather-date-div";
twoWeatherDateDiv.className = 'box  columns is-3';
twoWeatherDateDiv.textContent = "twoWeatherDateDiv has been created!";

const twoWeatherConditionDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherConditionDiv);
twoWeatherConditionDiv.id = "two-weather-condition-div";
twoWeatherConditionDiv.className = 'box  columns is-3';
twoWeatherConditionDiv.textContent = "twoWeatherConditionDiv has been created!";

const twoWeatherIconDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherIconDiv);
twoWeatherIconDiv.id = "two-weather-icon-div";
twoWeatherIconDiv.className = 'box  columns is-3';
twoWeatherIconDiv.textContent = "twoWeatherIconDiv has been created!";

const twoWeatherTempDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherTempDiv);
twoWeatherTempDiv.id = "two-weather-temp-div";
twoWeatherTempDiv.className ='box  columns is-3';
twoWeatherTempDiv.textContent = "twoWeatherTempDiv has been created!";










// DAY AFTER TOMORROW WEATHER COL
const threeWeatherCol = document.createElement('div');
weatherBlock.appendChild(threeWeatherCol);
threeWeatherCol.id = "three-weather-col";
threeWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const threeWeatherDateDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherDateDiv);
threeWeatherDateDiv.id = "three-weather-date-div";
threeWeatherDateDiv.className = 'box  columns is-3';
threeWeatherDateDiv.textContent = "threeWeatherDateDiv has been created!";

const threeWeatherConditionDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherConditionDiv);
threeWeatherConditionDiv.id = "three-weather-condition-div";
threeWeatherConditionDiv.className = 'box  columns is-3';
threeWeatherConditionDiv.textContent = "threeWeatherConditionDiv has been created!";

const threeWeatherIconDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherIconDiv);
threeWeatherIconDiv.id = "three-weather-icon-div";
threeWeatherIconDiv.className = 'box  columns is-3';
threeWeatherIconDiv.textContent = "threeWeatherIconDiv has been created!";

const threeWeatherTempDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherTempDiv);
threeWeatherTempDiv.id = "three-weather-temp-div";
threeWeatherTempDiv.className ='box  columns is-3';
threeWeatherTempDiv.textContent = "threeWeatherTempDiv has been created!";



  function getWeather() {
    fetch("http://api.weatherapi.com/v1/forecast.json?q=auto:ip&days=3&key=a41250d8d3284fa3b3264257223001",{
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "933080ba96mshccf83a9f1a3bb02p17725ajsn4157f19eeff5"
    }
  })
  .then(response => {
  return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data.location.country);
    console.log(data.location.name);

    var currentCountry = data.location.country
    getCountry(currentCountry)
    var currentLocation = data.location.name
    getLocation(currentLocation)

    // CURRENT WEATHER INFO
    console.log(data.current.condition.text)
    console.log(data.current.condition.icon)
    console.log(data.current.temp_f);

    var currentCondition = data.current.condition.text
    getCurrentCondition(currentCondition)
    var currentIcon = data.current.condition.icon
    getCurrentIcon(currentIcon)
    var currentTemp = data.current.temp_f
    getCurrentTemp(currentTemp)


    // TOMORROW'S WEATHER INFO
    console.log(data.forecast.forecastday[1].day.condition.text)
    console.log(data.forecast.forecastday[1].day.condition.icon)
    console.log(data.forecast.forecastday[1].day.avgtemp_f);

    // TWO DAYS OUT WEATHER INFO
    console.log(data.forecast.forecastday[2].day.condition.text)
    console.log(data.forecast.forecastday[2].day.condition.icon)
    console.log(data.forecast.forecastday[2].day.avgtemp_f);

    // var weatherCountry = data.location.country
    // var weatherLocation = data.location.name
    // var weatherConditionIcon = data.current.condition.icon
    // var weatherTemp = data.current.temp_f

    // $(weather).empty();
    // $(weather).append(weatherCountry + '<br>' + weatherLocation + '<br>' + weatherConditionIcon + '<br>' + weatherTemp + " F")

  })
  .catch(err => {
	  console.error(err);
  });
};

// Weather section ends here.








// DISPLAYS LOCATION
var getCountry = function (currentCountry){
  var country = document.querySelector("#weather-block-country");
  $(country).empty();
  $(country).append(currentCountry);
}

var getLocation = function (currentLocation){
  var location = document.querySelector("#weather-block-location");
  $(location).empty();
  $(location).append(currentLocation);
}


// DISPLAYS CURRENT DIVS INFO
var currentTime = function () {
  timeEL = document.querySelector('#current-weather-date-div')
  timeEL.innerHTML = moment().format('MMMM Do');
}
setInterval(currentTime, 1000);


var getCurrentCondition = function (currentCondition){
  var condition = document.querySelector("#current-weather-condition-div");
  $(condition).empty();
  $(condition).append(currentCondition);
}


var getCurrentIcon = function (currentIcon){
  var icon = document.querySelector("#current-weather-icon-div");
  $(icon).empty();
  $(icon).append(currentIcon);
}

var getCurrentTemp = function (currentTemp){
  var temp = document.querySelector("#current-weather-temp-div");
  $(temp).empty();
  $(temp).append(currentTemp + " F");
}


























getWeather()