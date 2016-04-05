import axios from 'axios'

const API_KEY = 'b60e324ce0805312ea1caae4c18f3edc'

function getLatLong(location) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${location}`).then(function(data) {
    console.log(data);
  })
}

function getForecastFromLatlong(latlong) {
  axios.get(`https://api.forecast.io/forecast/${API_KEY}/${latlong.data.results[0].geometry.location.latitude},${latlong.data.results[0].geometry.location.latitude}`).then(function(forecast) {
    console.log(forecast);
  })
}

const getForecast = function(location) {
  return getLatLong(location).then(getForecastFromLatlong)
}

module.exports = getForecast;
