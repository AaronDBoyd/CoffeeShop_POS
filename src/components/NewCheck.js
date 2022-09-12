import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'

function NewCheck(props) {

  const [check, setCheck] = useState([]); //How do I add keys to each check for items, time, price, id, open??
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddingItemsToCheck = ( item ) => {
    setCheck(prev => [...prev, item]); 

    setTotalPrice(totalPrice + item.price);
  }

  useEffect(() => {
    console.log(check);
    console.log(totalPrice);
  }, [check, totalPrice])

  const handleSendingOrder = () => {
    // gather check properties and send it to mainCheckList
    console.log("SEND")
  }

  return (
    <React.Fragment>
      <div className='newCheck'>
        <ItemizedCheck check={check} totalPrice={totalPrice} />
        <ItemButtons onItemCreation={handleAddingItemsToCheck}/>
        {/* <br/> */}
        </div>
        <button onClick={() => handleSendingOrder()}>Send Order</button>
      {/* </div> */}
    </React.Fragment>
  )
}

NewCheck.propTypes = {}

export default NewCheck

