import React, { PropTypes } from 'react'

const GetCityInput = (props) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Santa Clara, CA"
      value={props.city}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
      style={{margin: 10}}
       />
  )
}

export default GetCityInput
