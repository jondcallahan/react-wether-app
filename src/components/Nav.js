import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import GetCityContainer from '../containers/GetCityContainer'

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default"
        style={{
          backgroundColor: '#DDD',
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          border: 'none',
          borderRadius: 0,
        }}>
        <Link to="/">
          <h1 className="navbar-brand" style={{color: '#4E4E4E'}}>Weather</h1>
        </Link>
        <GetCityContainer direction="row"/>
      </nav>
    );
  }
}

Nav.propTypes = {
};
