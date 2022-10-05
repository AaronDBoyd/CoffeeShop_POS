import React, { useState } from "react";
import ReactModal from "react-modal";

export default function HomeView() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <React.Fragment>
      <div>
        <h2>HomeView</h2>
      {/* <button onClick={toggleModal}>Open Modal</button>

      <ReactModal isOpen={showModal}>
        <button onClick={toggleModal}>Close Modal</button>
      </ReactModal> */}
      </div>
    </React.Fragment>
  );
}
