import React, { PropTypes } from 'react'

const GetCitySubmit = (props) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={props.onSubmit}
      style={{margin: 10, width: '65%'}}
      disabled={props.disabled}
    >
    Get Weather!
    </button>
  )
}

export default GetCitySubmit
