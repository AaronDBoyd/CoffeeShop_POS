import React, { useState } from "react";
import Modal from "react-modal";
// import PropTypes from 'prop-types'

function CheckOpen(props) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const { handleSelectingCheck } = props;

  return (
    <React.Fragment>
      <div className="checkOpen" onClick={() => handleSelectingCheck(props.id)}/*onClick={() => setModalIsOpen(true)}*/>
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
