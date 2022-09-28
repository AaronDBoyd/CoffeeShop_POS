import React, { useState } from "react";
import CheckOpen from "./CheckOpen";
import Modal from "react-modal";

export default function OpenChecksList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="openChecksList">
        <h2>OpenChecksList</h2>
        {props.checkList.map((check) => (
          <CheckOpen
            /* onClick={() => setModalIsOpen(true) }*/
            handleSelectingCheck={props.handleSelectingCheck}

            drink={check.drink}
            size={check.size}
            totalPrice={check.totalPrice}
            open={check.open}
            timeOpen={check.timeOpen}
            id={check.id}
            items={check.items}
            key={check.id}
          />
        ))}
      </div>
      {/* <Modal isOpen={modalIsOpen}>
        <h2>Test</h2>
      </Modal> */}
    </React.Fragment>
  );
}
