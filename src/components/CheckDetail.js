import React, { useState, useEffect, useRef } from "react";
// import PropTypes from 'prop-types'

function CheckDetail(props) {
  const { check, handleClosingCheck } = props;
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [closeCheckString, setCloseCheckString] = useState(null);
  const amountRef = useRef();

  // let closeCheckString = null;

  //Close Check button sets entered amount.
    // -change checks open attr to false.
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredAmount(parseFloat(event.target.amount.value));
  }

  // - needs to display change amount
  // - only display change amount once "close Check" is clicked
  useEffect(() => {
    if (enteredAmount !== 0.00) {
      if (enteredAmount > check.totalPrice) {
        // closeCheckString = `Change Amount: $${JSON.stringify(enteredAmount - check.totalPrice)}`
        setCloseCheckString(`Change Amount: $${JSON.stringify(enteredAmount - check.totalPrice)}`);
        // console.log(`Change Amount: $${JSON.stringify(enteredAmount - check.totalPrice)}`)
      }
  
      if (check.totalPrice > enteredAmount) {
        setCloseCheckString(`Amount Due: $${JSON.stringify( check.totalPrice - enteredAmount )}`);
        // console.log(`Amount Due: $${JSON.stringify( check.totalPrice - enteredAmount )}`)
      }

      const timer = setTimeout(() => {
        console.log(check.open)
        handleClosingCheck() 
        // handleListClick();
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [enteredAmount])

  return (
    <React.Fragment>
      <div>
        <h2>CheckDetail</h2>
        <h3>Total Price - ${check.totalPrice}</h3>
      </div>
      <div>
        <h3>PayCheck</h3>
        <h4>Tendered Amount</h4>
        <form onSubmit={formSubmissionHandler}>
          <input type="text" name="amount" placeholder="0.00"  />
          <br/>
          <button type="submit">Close Check</button>
        </form>
        <br/>
        <h2>{closeCheckString}</h2>
      </div>
    </React.Fragment>
  );
}

CheckDetail.propTypes = {};

export default CheckDetail;
