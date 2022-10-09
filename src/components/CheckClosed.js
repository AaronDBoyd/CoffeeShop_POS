import React from 'react'
import PropTypes from 'prop-types'

function CheckClosed(props) {
  const { handleDeletingCheck } = props;

  return (
    <React.Fragment>
      <div className="checkOpen" >
        <h3>Check #{props.id.substr(9, 4)}</h3>
        <h4>Open: {props.open.toString()}</h4>
        <h4>${props.totalPrice}</h4>
        <h4>Number of items: {props.items.length}</h4>
        <h4>{props.timeOpen}</h4>
        <button onClick={() => handleDeletingCheck(props.id)}>Void</button>
      </div>
      
    </React.Fragment>
  )
}

CheckClosed.propTypes = {}

export default CheckClosed

