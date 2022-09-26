import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";
import NewCheck from "./NewCheck";
import OpenChecksList from "./OpenChecksList";

function CheckControl() {
  const [newCheckVisible, setNewCheckVisible] = useState(false);
  const [openChecksVisible, setOpenCheckVisible] = useState(false);
  const [mainCheckList, setMainCheckList] = useState([
    /* ??change to an object to prep for firestore?? */
    {
      id: 1,
      timeOpen: "Sun Aug 28 2022",
      open: true,
      totalPrice: 5,
      items: [
        {
          drink: "coffee",
          size: "medium",
          price: 2,
        },
        {
          drink: "coffee",
          size: "large",
          price: 3,
        },
      ],
    },
    {
      id: 2,
      timeOpen: "Sun Aug 28 2022",
      open: true,
      totalPrice: 6,
      items: [
        {
          drink: "coffee",
          size: "medium",
          price: 2,
        },
        {
          drink: "coffee",
          size: "large",
          price: 3,
        },
        {
          drink: "coffee",
          size: "small",
          price: 1,
        },
      ],
    },
  ]);

  const handleHomeClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(false);
  };

  const handleNewClick = () => {
    setNewCheckVisible(true);
    setOpenCheckVisible(false);
  };

  const handleListClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(true);
  };
  
  const handleAddingCheckToCheckList = (newCheck) => {
    const newMainCheckList = mainCheckList.concat(newCheck);

    setMainCheckList(newMainCheckList);
    
  };

  
  useEffect(() => {
    // console.log(mainCheckList);
    console.log(`mainCheckList = ${JSON.stringify(mainCheckList)}`);
  }, [mainCheckList])

  
  let currentlyVisibleState = null;
  // let buttonText = null;

  if (newCheckVisible) {
    currentlyVisibleState = <NewCheck handleAddingCheckToCheckList={handleAddingCheckToCheckList}
    handleListClick={handleListClick}/>;
    // buttonText = "Home View";
  } else if (openChecksVisible) {
    currentlyVisibleState = <OpenChecksList checkList={mainCheckList} />;
  } else {
    currentlyVisibleState = <HomeView />;
    // buttonText = "New Check";
  }

  return (
    <React.Fragment>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleNewClick}>New Check</button>
      <button onClick={handleListClick}>OpenChecksList</button>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default CheckControl;


