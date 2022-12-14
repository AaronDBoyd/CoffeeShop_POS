import React, { useState, useEffect } from "react";

export default function HomeView(props) {
  const { setLoggedIn, handleNewClick } = props;
  const [enteredPin, setEnteredPin] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const validPIN = "5555"

  const handleEnteringPin = (num) => {
    if (enteredPin.length < 4) {
      setEnteredPin(enteredPin.concat(num));
    }
  };

  const handleClear = () => {
    setEnteredPin([]);
  };

  
  const handleEnter = () => {
    if (enteredPin.join("") === validPIN) {
      setLoggedIn(true);
      handleNewClick();
    } else {
      setInvalid(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInvalid(false);
      setEnteredPin([]);
    }, 2000);
    return () => clearTimeout(timer);
  },[invalid])

  let stars = " - ";

  switch (enteredPin.length) {
    case 0:
      stars = " - ";
      break;
    case 1:
      stars = "*";
      break;
    case 2:
      stars = "* *";
      break;
    case 3:
      stars = "* * *";
      break;
    case 4:
      stars = "* * * *";
      break;
    default:
      stars = " - "
  }

  let message = null;
  if (invalid === true) {
    message = "*** PIN invalid ***";
  } else {
    message = "Please enter PIN";
  }

  return (
    <React.Fragment>
      <div className="login">
        <h2>Log In</h2>
        <h3>
          <strong>{stars}</strong>
        </h3>
        <div className="logInButtons">
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("1")}
          >
            1
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("2")}
          >
            2
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("3")}
          >
            3
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("4")}
          >
            4
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("5")}
          >
            5
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("6")}
          >
            6
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("7")}
          >
            7
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("8")}
          >
            8
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("9")}
          >
            9
          </button>
          <button className="logIn_button enter_clear" onClick={handleClear}>
            CLEAR
          </button>
          <button
            className="logIn_button"
            onClick={() => handleEnteringPin("0")}
          >
            0
          </button>
          <button className="logIn_button enter_clear" onClick={handleEnter}>
            ENTER
          </button>
        </div>
        <h3>{message}</h3>
      </div>
    </React.Fragment>
  );
}
