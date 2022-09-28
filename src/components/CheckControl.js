import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";
import NewCheck from "./NewCheck";
import OpenChecksList from "./OpenChecksList";
import CheckDetail from "./CheckDetail";

function CheckControl() {
  const [newCheckVisible, setNewCheckVisible] = useState(false);
  const [openChecksVisible, setOpenCheckVisible] = useState(false);
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [mainCheckList, setMainCheckList] = useState([
    /* ??change to an object to prep for firestore?? */
    // {
    //   id: 1,
    //   timeOpen: "Sun Aug 28 2022",
    //   open: true,
    //   totalPrice: 5,
    //   items: [
    //     {
    //       drink: "coffee",
    //       size: "medium",
    //       price: 2,
    //     },
    //     {
    //       drink: "coffee",
    //       size: "large",
    //       price: 3,
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   timeOpen: "Sun Aug 28 2022",
    //   open: true,
    //   totalPrice: 6,
    //   items: [
    //     {
    //       drink: "coffee",
    //       size: "medium",
    //       price: 2,
    //     },
    //     {
    //       drink: "coffee",
    //       size: "large",
    //       price: 3,
    //     },
    //     {
    //       drink: "coffee",
    //       size: "small",
    //       price: 1,
    //     },
    //   ],
    // },
  ]);

  const handleHomeClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(false);
    setSelectedCheck(null);
  };

  const handleNewClick = () => {
    setNewCheckVisible(true);
    setOpenCheckVisible(false);
    setSelectedCheck(null);
  };

  const handleListClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(true);
    setSelectedCheck(null);
  };

  const handleAddingCheckToCheckList = (newCheck) => {
    const newMainCheckList = mainCheckList.concat(newCheck);

    setMainCheckList(newMainCheckList);
  };

  useEffect(() => {
    // console.log(mainCheckList);
    console.log(`mainCheckList = ${JSON.stringify(mainCheckList)}`);
  }, [mainCheckList]);

  const handleSelectingCheck = (id) => {
    const chosenCheck = mainCheckList.filter((check) => check.id === id)[0];
    setSelectedCheck(chosenCheck);
    // console.log("click");
    // console.log(selectedCheck);
  };

  let currentlyVisibleState = null;
  // let buttonText = null;

  if (selectedCheck != null) {
    currentlyVisibleState = <CheckDetail check={selectedCheck}/>;
  } else if (openChecksVisible) {
    currentlyVisibleState = (
      <OpenChecksList
        checkList={mainCheckList}
        handleSelectingCheck={handleSelectingCheck}
      />
    );
  } else if (newCheckVisible) {
    currentlyVisibleState = (
      <NewCheck
        handleAddingCheckToCheckList={handleAddingCheckToCheckList}
        handleListClick={handleListClick}
      />
    );
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
