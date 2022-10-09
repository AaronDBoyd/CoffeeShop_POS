import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EditItemized from "./EditItemized";
import ItemButtons from "./ItemButtons";

function EditCheck(props) {
  const { selectedCheck, handleListClick, handleEditingCheckInList } = props;
  const [check, setCheck] = useState({});
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddingItemsToCheck = (newItem) => {
    // setItems(prev => [...prev, item]);
    const newItemsList = items.concat(newItem);

    setItems(newItemsList);
    setTotalCost(totalCost + newItem.price);
  };

  useEffect(() => {
    setCheck({
      id: selectedCheck.id,
      timeOpen: selectedCheck.timeOpen,
      open: true,
      totalPrice: selectedCheck.totalPrice + totalCost,
      items: selectedCheck.items.concat(items), 
    });
    // console.log(items)
  }, [items, totalCost]);

  // useEffect(() => {
  //   console.log(`check = ${JSON.stringify(check)}`)
  //   // console.log(items.length)
  // },[check])

  const handleEditSend = () => {
    if (totalCost > 0) {
      handleListClick();
      handleEditingCheckInList(check);
    }
  };

  let passedItems = [];
  let passedCost = 0;

  if (Object.keys(check).length === 0) {
    passedItems = selectedCheck.items;
    passedCost = selectedCheck.totalPrice;
  } else {
    passedItems = check.items;
    passedCost = check.totalPrice;
  }

  const handleDeletingItems = (itm) => {
    const itmId = itm.key;
    // console.log(itmId);

    const newItemsList = items.filter((item) => item.key !== itmId);
    const voidedItem = items.filter((item) => item.key === itmId);
    const voidPrice = itm.price;
    // console.log(newItemsList);
    // console.log(voidedItem);
    setItems(newItemsList);
    setTotalCost(totalCost - voidPrice);
  };

  return (
    <React.Fragment>
      <hr />
      <h2>Update Check</h2>
      <div className="newCheck">
        <EditItemized
          items={passedItems}
          totalCost={passedCost}
          handleDeletingItems={handleDeletingItems}
        />
        <ItemButtons onItemCreation={handleAddingItemsToCheck} />
      </div>
      <button onClick={() => handleEditSend()}>Send</button>
    </React.Fragment>
  );
}

EditCheck.propTypes = {};

export default EditCheck;
