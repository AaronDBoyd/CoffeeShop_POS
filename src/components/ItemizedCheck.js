import React, { useState } from "react";
// import PropTypes from 'prop-types'
import ReactModal from "react-modal";

function ItemizedCheck(props) {
  const time = new Date().toDateString();
  const { items, totalCost, handleDeletingItems } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <React.Fragment>
      <div className="itemizedCheck">
        <h3>{time}</h3>
        <h6>(click item to remove)</h6>
        {items.map((item) => (
          <h4 key={item.key}
          onClick={ toggleModal
            // () => handleDeletingItems(item.id)
            }>
            {item.size} {item.drink} - ${item.price}
          </h4>
        ))}
        <hr />
        <h4> Total Price: ${totalCost}</h4>

        {/* <button onClick={toggleModal}>Open Modal</button> */}

      <ReactModal className="newCheckModal" isOpen={showModal} style={{
    overlay: {
      // position: 'fixed',
      top: 200,
      left: 450,
      right: 450,
      bottom: 200,
      borderRadius: '40px',
      // backgroundColor: '#ccc'
      // backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      right: '10px',
      bottom: '10px',
      border: '1px solid #ccc',
      background: 'rgb(236, 222, 250)',
      // background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '40px',
      outline: 'none',
      padding: '20px'
    }
  }}>
        <h1>Delete Item?</h1>
        <button onClick={toggleModal}>Yes</button>
        <button onClick={toggleModal}>No</button>
      </ReactModal>
      </div>
    </React.Fragment>
  );
}

ItemizedCheck.propTypes = {};

export default ItemizedCheck;
