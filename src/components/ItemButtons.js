import React, { useState }  from 'react'
// import PropTypes from 'prop-types'

function ItemButtons(props) {

  const [sizeButtons, setSizeButtons] = useState(false);

  const sizeButtonHandler = (btn) => {
    setSizeButtons(prev => !prev);
    testFunc(btn);
  }

  const coffeeButtonHandler = (btn) => {
    setSizeButtons(prev => !prev);
    testFunc(btn);
  }

  const testFunc =(str) => {
    console.log(str)
  }

  let visibleButtons = null;

  if (sizeButtons) {
    visibleButtons = (
      <div className='itemButtons'>
        <button onClick={() => sizeButtonHandler("small")}>Small</button>
        <button onClick={() => sizeButtonHandler("medium")}>Medium</button>
        <button onClick={() => sizeButtonHandler("large")}>Large</button>
      </div>);
    } else {
      visibleButtons = (
        <div className='itemButtons'>
          <button onClick={() => coffeeButtonHandler("hot coffee")}>Hot Coffee</button>
          <button onClick={() => coffeeButtonHandler("cold coffee")}>Cold Coffee</button>
        </div>);
    };
  
  return (
    <React.Fragment>
      {visibleButtons}
    </React.Fragment>
  )
}

ItemButtons.propTypes = {}

export default ItemButtons
