import React, { useState } from "react";
import HomeView from "./HomeView";
import NewCheck from "./NewCheck";
import OpenChecksList from "./OpenChecksList";
import CheckDetail from "./CheckDetail";
import ClosedChecksList from "./ClosedChecksList";

function CheckControl() {
  const [newCheckVisible, setNewCheckVisible] = useState(false);
  const [openChecksVisible, setOpenCheckVisible] = useState(false);
  const [closedChecksVisible, setClosedChecksVisible] = useState(false);
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [mainCheckList, setMainCheckList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogoutClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(false);
    setClosedChecksVisible(false);
    setSelectedCheck(null);
    setLoggedIn(false);
  };

  const handleNewClick = () => {
    setNewCheckVisible(true);
    setOpenCheckVisible(false);
    setClosedChecksVisible(false);
    setSelectedCheck(null);
  };

  const handleListClick = () => {
    setNewCheckVisible(false);
    setOpenCheckVisible(true);
    setClosedChecksVisible(false);
    setSelectedCheck(null);
  };

  const handleClosedClick = () => {
    setClosedChecksVisible(true);
    setNewCheckVisible(false);
    setOpenCheckVisible(false);
    setSelectedCheck(null);
  };

  const handleAddingCheckToCheckList = (newCheck) => {
    const newMainCheckList = mainCheckList.concat(newCheck);
    setMainCheckList(newMainCheckList);
  };

  const handleSelectingCheck = (id) => {
    const chosenCheck = mainCheckList.filter((check) => check.id === id)[0];
    setSelectedCheck(chosenCheck);
  };

  const handleClosingCheck = () => {
    const editedList = mainCheckList.filter(
      (check) => check.id !== selectedCheck.id
    );
    const closedCheck = selectedCheck;
    closedCheck.open = false;
    setMainCheckList(editedList.concat(closedCheck));
    handleListClick();
  };

  const handleDeletingCheck = (checkId) => {
    const newCheckList = mainCheckList.filter((check) => check.id !== checkId);
    setMainCheckList(newCheckList);
  };

  const handleEditingCheckInList = (newCheck) => {
    const oldList = mainCheckList.filter((check) => check.id !== newCheck.id);
    const newList = oldList.concat(newCheck);
    setMainCheckList(newList);
  }

  let currentlyVisibleState = null;
  if (selectedCheck != null) {
    currentlyVisibleState = (
      <CheckDetail
        check={selectedCheck}
        handleListClick={handleListClick}
        handleClosingCheck={handleClosingCheck}
        handleDeletingCheck={handleDeletingCheck}
        handleEditingCheckInList={handleEditingCheckInList}
      />
    );
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
  } else if (closedChecksVisible) {
    currentlyVisibleState = <ClosedChecksList checkList={mainCheckList} handleDeletingCheck={handleDeletingCheck} />;
  } else {
    currentlyVisibleState = <HomeView setLoggedIn={setLoggedIn} handleNewClick={handleNewClick}/>;
  }

  let navButtons = null;
  if (loggedIn === true) {
    navButtons = (
      <>
      <button onClick={handleLogoutClick}>Log Out</button>
      <button onClick={handleNewClick}>New Check</button>
      <button onClick={handleListClick}>OpenChecksList</button>
      <button onClick={handleClosedClick}>ClosedChecksList</button>
      </>
    )
  }

  return (
    <React.Fragment>
      {navButtons}
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default CheckControl;
