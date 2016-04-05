import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import FriendlyDate from './FriendlyDate'

const DayForecastPreview = (props) => {
  return (
    <div className="col-xs-6 col-sm-4" style={{margin: '2em 0'}}>
      <Link to={{pathname: 'details', state: {forecast: props.forecast}}}>
        <img
          src={'http://www.reactjsprogram.com/React-Fundamentals-Project/app/images/weather-icons/' +
            props.forecast.weather[0].icon + '.svg'}
          alt={props.forecast.weather[0].main}
          height={75}
        />
      <FriendlyDate date={props.forecast.dt} />
      </Link>
    </div>

  )
}

DayForecastPreview.propTypes = {
  forecast: PropTypes.object.isRequired,
}

export default DayForecastPreview
