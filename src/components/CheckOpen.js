import React from "react";
// import PropTypes from 'prop-types'

function CheckOpen(props) {
  const { handleSelectingCheck } = props;

  return (
    <React.Fragment>
      <div className="checkOpen" onClick={() => handleSelectingCheck(props.id)}>
        <h3>Check #{props.id.substr(9, 4)}</h3>
        <h4>${props.totalPrice}</h4>
        <h4>Number of items: {props.items.length}</h4>
        <h4>{props.timeOpen}</h4>
      </div> 
    </React.Fragment>
  );
}

CheckOpen.propTypes = {};

export default CheckOpen;
