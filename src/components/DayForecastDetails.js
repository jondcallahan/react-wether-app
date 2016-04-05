import React, { PropTypes } from 'react'
import FriendlyDate from './FriendlyDate'

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

const DayForecastDetails = (props) => {
  const forecast = props.location.state.forecast
  return (
    <div className="container">
      <div className="row text-center">
        <FriendlyDate date={forecast.dt} style={{fontSize: 32, margin: 10}} />
        <img
          src={'http://www.reactjsprogram.com/React-Fundamentals-Project/app/images/weather-icons/' +
            forecast.weather[0].icon + '.svg'}
          alt={forecast.weather[0].main}
          height={150}
        />
        <div style={{fontSize: 18, marginTop: 20}}>
          <h2 style={{margin: 15}}>{toTitleCase(forecast.weather[0].description)}</h2>
          <p>Day high: <strong>{forecast.temp.max }º</strong></p>
          <p>Day low: <strong>{forecast.temp.min}º</strong></p>
        </div>
      </div>
  </div>
  )
}

DayForecastDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      forecast: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DayForecastDetails
