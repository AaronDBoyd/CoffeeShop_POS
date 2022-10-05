import React, { useState } from "react";
import PropTypes from "prop-types";
import EditItemized from "./EditItemized";
import ItemButtons from "./ItemButtons";

function EditCheck(props) {
  const { selectedCheck } = props;
  const [check, setCheck] = useState({});
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddingItemsToCheck = (newItem) => {
    // setItems(prev => [...prev, item]);
    const newItemsList = items.concat(newItem);

    setItems(newItemsList);
    setTotalCost(totalCost + newItem.price);
    console.log(selectedCheck)
  };

  return (
    <React.Fragment>
      <hr/>
        <h2>Update Check</h2>
        <div className="newCheck">
        <EditItemized items={selectedCheck.items}/>
        <ItemButtons onItemCreation={handleAddingItemsToCheck} />
        </div>
        <button>Send</button>
      
    </React.Fragment>
  );
}

EditCheck.propTypes = {};

export default EditCheck;
