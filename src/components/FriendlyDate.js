import React, { PropTypes } from 'react'

const FriendlyDate = (props) => {
  return (
    <p style={props.style}>{new Date(props.date * 1000).toDateString()}</p>
  )
}

FriendlyDate.propTypes = {
  date: PropTypes.number.isRequired,
}
FriendlyDate.defaultProps = {
  style: {fontWeight: 'bold', fontSize: 16, margin: 10}
}
export default FriendlyDate
