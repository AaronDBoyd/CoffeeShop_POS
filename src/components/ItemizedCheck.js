import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import ReactModal from "react-modal";

function ItemizedCheck(props) {
  const time = new Date().toDateString();
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
  };

  const handleItemClick = (item) => {
    setShowModal((prev) => !prev);
    setItemBookmark(item);
  };

  // useEffect(() => {
  //   console.log(itemBookmark);
  // }, [itemBookmark]);

  return (
    <React.Fragment>
      <div className="itemizedCheck">
        <h3>{time}</h3>
        <h6>(click item to remove)</h6>
        {items.map((item) => (
          <h4
            key={item.key}
            onClick={
              () => handleItemClick(item)
              // () => handleDeletingItems(item.id)
            }
          >
            {item.size} {item.drink} - ${item.price}
          </h4>
        ))}
        <hr />
        <h4> Total Price: ${totalCost}</h4>

        {/* <button onClick={toggleModal}>Open Modal</button> */}

        <ReactModal
          className="newCheckModal"
          isOpen={showModal}
          ariaHideApp={false}
          style={{
            overlay: {
              // position: 'fixed',
              top: 150,
              left: 400,
              right: 400,
              bottom: 200,
              borderRadius: "40px",
              // backgroundColor: '#ccc'
              // backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              border: "1px solid #ccc",
              background: "rgb(202, 175, 231)",
              // background: '#fff',
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
  );
}

ItemizedCheck.propTypes = {};

export default ItemizedCheck;
