import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import ReactModal from "react-modal";

function EditItemized(props) {
  const { items, totalCost, handleDeletingItems } = props;
  const [showModal, setShowModal] = useState(false);
  const [itemBookmark, setItemBookmark] = useState(null);

  const handleNoClick = () => {
    setShowModal((prev) => !prev);
    setItemBookmark(null);
  };

  const handleYesClick = () => {
    setShowModal((prev) => !prev);

    setItemBookmark(null);
    handleDeletingItems(itemBookmark);
    console.log(items)
  };

  const handleItemClick = (item) => {
    setShowModal((prev) => !prev);
    setItemBookmark(item);

  };


  return (
    <React.Fragment>
      <div className='itemizedCheck'>
      {items.map((item) => (
          <h4
            key={item.key}
            onClick={
              () => handleItemClick(item)}
          >
            {item.size} {item.drink} - ${item.price}
          </h4>
        ))}
        <hr />
        <h4> Total Price: ${totalCost}</h4>


        <ReactModal
          className="newCheckModal"
          isOpen={showModal}
          ariaHideApp={false}
          style={{
            overlay: {
              top: 150,
              left: 400,
              right: 400,
              bottom: 200,
              borderRadius: "40px",
            },
            content: {
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              border: "1px solid #ccc",
              background: "rgb(202, 175, 231)",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "40px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <h1>Delete Item?</h1>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </ReactModal>
      </div>
    </React.Fragment>    
  )
}

EditItemized.propTypes = {}

export default EditItemized
