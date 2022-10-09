import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import EditItemized from "./EditItemized";
import ItemButtons from "./ItemButtons";

function EditCheck(props) {
  const { selectedCheck, handleListClick, handleEditingCheckInList } = props;
  const [check, setCheck] = useState({});
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setItems(selectedCheck.items)
  },[selectedCheck.items])

  const handleAddingItemsToCheck = (newItem) => {
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
      // items: selectedCheck.items.concat(items), 
      items: items, 
    });
  }, [items, totalCost, selectedCheck.totalPrice, selectedCheck.timeOpen, selectedCheck.id]);

  // useEffect(() => {
  //   console.log(`check = ${JSON.stringify(check)}`)
  //   // console.log(items.length)
  // },[check])

  const handleEditSend = () => {
    if (check.totalPrice > 0) {
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
    const newItemsList = items.filter((item) => item.key !== itmId);
    const voidPrice = itm.price;
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
