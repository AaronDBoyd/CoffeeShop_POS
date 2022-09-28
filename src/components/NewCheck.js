import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'
import { v4 } from 'uuid';

function NewCheck(props) {
  const { handleListClick, handleAddingCheckToCheckList } = props;

  const [check, setCheck] = useState({}); //How do I add keys to each check for items, time, price, id, open??
  const [items, setItems] = useState([]); 
  const [totalCost, setTotalCost] = useState(0);

  const handleAddingItemsToCheck = ( newItem ) => {
    // setItems(prev => [...prev, item]); 
    const newItemsList = items.concat(newItem)

    setItems(newItemsList); 

    setTotalCost(totalCost + newItem.price);
    
  }

  useEffect(() => {
    const time = new Date().toDateString();
    setCheck({
      id: v4(),
      timeOpen: time,
      open: true,
      totalPrice: totalCost,
      items: items
    })
    
    console.log(`items = ${JSON.stringify(items)}`)
  }, [items, totalCost])


  const handleSendingOrder = () => {
    
    handleListClick();
    console.log("SEND")
    handleAddingCheckToCheckList(check)
    console.log(`check = ${JSON.stringify(check)}`);
    
  }


  return (
    <React.Fragment>
      <div className='newCheck'>
        <ItemizedCheck items={items} totalCost={totalCost} />
        <ItemButtons onItemCreation={handleAddingItemsToCheck}/>
        {/* <br/> */}
        </div>
        <button onClick={() => handleSendingOrder()}>Send Order</button>
        <button>Pay Check</button>
      {/* </div> */}
    </React.Fragment>
  )
}

NewCheck.propTypes = {}

export default NewCheck

