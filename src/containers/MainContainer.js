import React, { PropTypes } from 'react'

import Nav from '../components/Nav'

const MainContainer = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default MainContainer
