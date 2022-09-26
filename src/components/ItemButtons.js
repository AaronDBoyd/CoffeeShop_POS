import React, { useState }  from 'react'
// import PropTypes from 'prop-types'
import { v4 } from 'uuid';

function ItemButtons(props) {

  const { onItemCreation } = props;

  const [sizeButtons, setSizeButtons] = useState(false);
  const [drinkName, setDrinkName] = useState(null);

  const sizeButtonHandler = (size, price) => { 
    setSizeButtons(prev => !prev);
    onItemCreation({
      size: size,
      drink: drinkName,
      price: price,
      key: v4(),
    })

    setDrinkName(null);
  }

  const coffeeButtonHandler = (btn) => {
    setSizeButtons(prev => !prev);

    setDrinkName(btn);
    // console.log(btn);
  }


  let visibleButtons = null; 

  if (sizeButtons) {
    visibleButtons = (
      <div className='itemButtons'>
        <button onClick={() => sizeButtonHandler("small", 2)}>Small</button>
        <button onClick={() => sizeButtonHandler("medium", 4)}>Medium</button>
        <button onClick={() => sizeButtonHandler("large", 6)}>Large</button>
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
