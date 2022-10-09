import React, { useState }  from 'react'
// import PropTypes from 'prop-types'
import { v4 } from 'uuid';


// add Modifyer modal when item clicked
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
      <div className='itemButtons sizeButtons'>
        <button onClick={() => sizeButtonHandler("Small", 2)}>Small</button>
        <br />
        <button onClick={() => sizeButtonHandler("Medium", 4)}>Medium</button>
        <br />
        <button onClick={() => sizeButtonHandler("Large", 6)}>Large</button>
      </div>);
    } else {
      visibleButtons = (
        <div className='itemButtons'>
          <button onClick={() => coffeeButtonHandler("Hot Coffee")}>Hot Coffee</button>
          <button onClick={() => coffeeButtonHandler("Iced Coffee")}>Iced Coffee</button>
          <br />
          <button onClick={() => coffeeButtonHandler("Frappuccino")}>Frappuccino</button>
          <button onClick={() => coffeeButtonHandler("Pupp-uccino")}>Pupp-uccino</button>
          <br />
          <button onClick={() => coffeeButtonHandler("Hot Tea")}>Hot Tea</button>
          <button onClick={() => coffeeButtonHandler("Iced Tea")}>Iced Tea</button>
          
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
