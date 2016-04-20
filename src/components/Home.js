import React, {PropTypes} from 'react';
import GetCityContainer from '../containers/GetCityContainer'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const src = require('../images/weather.png')
    return (
      <div style={{
            backgroundImage: `url('${src}')`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -100,
            display: 'flex',
            display: '-webkit-flex',
            alignItems: 'center',
            WebkitAlignItems: 'center',
            justifyContent: 'center',
            WebkitJustifyContent: 'center',
            flexDirection: 'column'
      }}>
      <h1 style={{
          color: '#4E4E4E',
          fontWeight: 100,
          textAlign: 'center',
        }}>Please enter a City and State</h1>
      <GetCityContainer direction="column"/>
      </div>
    );
  }
}

// backgroundImage:'url("https://cdn.rawgit.com/ReactjsProgram/react-fundamentals-curriculum/master/app/images/pattern.svg")',

Home.propTypes = {
};
