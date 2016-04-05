import React, {PropTypes} from 'react';
import GetCityInput from '../components/GetCity/Input'
import GetCitySubmit from '../components/GetCity/Submit'

export default class GetCity extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      city: '',
    }

    this.onCityInputChange = this.onCityInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onCityInputChange(e) {
    this.setState({
      city: e.target.value,
    })
  }

  handleSubmit() {
    this.context.router.push({
      pathname: '/forecast/' + this.state.city,
      state: {
        city: this.state.city,
      },
    })
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        maxWidth: 300,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: this.props.direction
      }}
      >
        <GetCityInput city={this.state.city} onChange={this.onCityInputChange} onSubmit={this.handleSubmit} />
        <GetCitySubmit onSubmit={this.handleSubmit} disabled={this.state.city ? false : true} />
      </div>
    );
  }
}

GetCity.propTypes = {
  direction: PropTypes.string.isRequired,
};

GetCity.contextTypes = {
  router: PropTypes.object.isRequired,
}
