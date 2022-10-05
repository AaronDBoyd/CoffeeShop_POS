import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import ItemizedCheck from "./ItemizedCheck";
import ItemButtons from "./ItemButtons";
import { v4 } from "uuid";

function NewCheck(props) {
  const { handleListClick, handleAddingCheckToCheckList } = props;

  const [check, setCheck] = useState({});
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddingItemsToCheck = (newItem) => {
    // setItems(prev => [...prev, item]);
    const newItemsList = items.concat(newItem);

    setItems(newItemsList);
    setTotalCost(totalCost + newItem.price);
  };

  // not displaying check items after any are deleted
  const handleDeletingItems = (itemId) => {
    const newItemsList = items.filter((item) => item.id !== itemId);
    const voidedItem = items.filter((item) => (item.id === itemId));
    const voidPrice = voidedItem[0].price 
    // console.log(voidedItem[0].price)
    setItems(newItemsList);
    setTotalCost(totalCost - voidPrice);
  };

  useEffect(() => {
    const time = new Date().toDateString();
    setCheck({
      id: v4(),
      timeOpen: time,
      open: true,
      totalPrice: totalCost,
      items: items,
    });
  }, [items, totalCost]);

  const handleSendingOrder = () => {
    if (totalCost > 0) {
      handleListClick();
      handleAddingCheckToCheckList(check);
    }
  };

  return (
    <React.Fragment>
      <div className="newCheck">
        <ItemizedCheck
          items={items}
          totalCost={totalCost}
          handleDeletingItems={handleDeletingItems}
        />
        <ItemButtons onItemCreation={handleAddingItemsToCheck} />
        {/* <br/> */}
      </div>
      <button onClick={() => handleSendingOrder()}>Send Order</button>
      {/* <button>Pay Check</button> */}
      {/* </div> */}
    </React.Fragment>
  );
}

NewCheck.propTypes = {};

export default NewCheck;
