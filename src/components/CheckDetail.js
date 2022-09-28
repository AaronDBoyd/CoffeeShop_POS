import React, { useState, useEffect, useRef } from "react";
// import PropTypes from 'prop-types'

function CheckDetail(props) {
  const { check } = props;
  const [enteredAmount, setEnteredAmount] = useState(0);
  const amountRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredAmount(parseFloat(event.target.amount.value));
  }

  useEffect(() => {
    console.log(`amount = ${JSON.stringify(enteredAmount)}`)
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
      </div>
    </React.Fragment>
  );
}

CheckDetail.propTypes = {};

export default CheckDetail;
