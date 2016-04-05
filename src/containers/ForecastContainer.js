import React, {PropTypes} from 'react';
import request from 'superagent'

import DayForecastPreview from '../components/DayForecastPreview'


export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      forecastData: {},
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.renderForecastData = this.renderForecastData.bind(this)
  }

  componentDidMount() {
    request.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.params.city}&appid=dac52ed895a2006f630a26be21440081&units=imperial&type=accurate&cnt=5`).end( (err, res) => {
      if (err) {
        console.log('ERROR GETTING WEATHER', err);
      } else {
        this.setState({
          isLoading: false,
          forecastData: res.body,
        })

      }
    })
  }

  renderForecastData(key) {
    return(
      <DayForecastPreview key={key} forecast={this.state.forecastData.list[key]}  />
    )
  }

  render() {

    if (this.state.isLoading) {
      return (
        <h1 className="text-center">
          Loading...
        </h1>
      );
    } else {
      return(
        <div className="container text-center">
          <h1>{this.state.forecastData.city.name}</h1>
          <div className="row">
            {Object.keys(this.state.forecastData.list).map(this.renderForecastData)}
          </div>
        </div>
      )
    }
  }
}
