import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'
import { v4 } from 'uuid';

function NewCheck(props) {
  const [check, setCheck] = useState({}); //How do I add keys to each check for items, time, price, id, open??
  const [items, setItems] = useState([]); 
  const [totalCost, setTotalCost] = useState(0);

  const handleAddingItemsToCheck = ( item ) => {
    setItems(prev => [...prev, item]); 

    setTotalCost(totalCost + item.price);
  }

  useEffect(() => {
    // console.log(items);
    // console.log(totalCost);
    console.log(check);
  }, [ check])

  const handleSendingOrder = () => {
    // gather check properties and send it to mainCheckList
    const time = new Date().toDateString();
    setCheck({
      id: v4(),
      timeOpen: time,
      open: true,
      totalPrice: totalCost,
      items: items
    })
    // change newCheckVisible to false
    console.log("SEND")
  }

  return (
    <React.Fragment>
      <div className='newCheck'>
        <ItemizedCheck items={items} totalCost={totalCost} />
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

