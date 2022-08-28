import React from 'react'
// import PropTypes from 'prop-types'

function CheckOpen(props) {
  return (
    <React.Fragment>
      <h3>Check #{props.id}</h3>
      <h4>${props.totalPrice}</h4>
      <h4>{props.timeOpen}</h4>
    </React.Fragment>
  )
}

CheckOpen.propTypes = {}

export default CheckOpen
