import React, { useState, useEffect } from "react";
import EditCheck from "./EditCheck";
// import PropTypes from 'prop-types'

function CheckDetail(props) {
  const {
    check,
    handleClosingCheck,
    handleDeletingCheck,
    handleListClick,
    handleEditingCheckInList,
  } = props;
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [closeCheckString, setCloseCheckString] = useState(null);
  const [editingScreen, setEditingScreen] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredAmount(parseFloat(event.target.amount.value));
  };

  useEffect(() => {
    if (enteredAmount !== 0.0) {
      if (enteredAmount > check.totalPrice) {
        setCloseCheckString(
          `Change Amount: $${JSON.stringify(enteredAmount - check.totalPrice)}`
        );
        const timer = setTimeout(() => {
          handleClosingCheck();
        }, 3000);
        return () => clearTimeout(timer);
      }

      if (check.totalPrice > enteredAmount) {
        setCloseCheckString(
          `Amount Due: $${JSON.stringify(check.totalPrice - enteredAmount)}`
        );
      }
    }
  }, [enteredAmount, check.totalPrice, handleClosingCheck]);

  if (editingScreen) {
    return (
      <React.Fragment>
        <div>
          <h2>CheckDetail</h2>
          <button onClick={() => setEditingScreen((prev) => !prev)}>
            Edit
          </button>
          <button onClick={() => handleDeletingCheck(check.id)}>Void</button>
          <EditCheck
            selectedCheck={check}
            handleListClick={handleListClick}
            handleEditingCheckInList={handleEditingCheckInList}
          />
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div>
        <h2>CheckDetail</h2>
        <button onClick={() => setEditingScreen((prev) => !prev)}>Edit</button>
        <button onClick={() => handleDeletingCheck(check.id)}>Void</button>
      </div>

      <div>
        <h3>PayCheck</h3>
        <h4>Total Price: ${check.totalPrice}</h4>
        <h4>Tendered Amount</h4>
        <form onSubmit={formSubmissionHandler}>
          <input type="text" name="amount" placeholder="0.00" />
          <br />
          <button type="submit">Close Check</button>
        </form>
        <br />
        <h2>{closeCheckString}</h2>
      </div>
    </React.Fragment>
  );
}

CheckDetail.propTypes = {};

export default CheckDetail;
