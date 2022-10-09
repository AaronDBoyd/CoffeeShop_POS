import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";
import NewCheck from "./NewCheck";
import OpenChecksList from "./OpenChecksList";
import CheckDetail from "./CheckDetail";
import ClosedChecksList from "./ClosedChecksList";
import db from './../firebase.js'
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

function CheckControl() {
  const [newCheckVisible, setNewCheckVisible] = useState(false);
  const [openChecksVisible, setOpenCheckVisible] = useState(false);
  const [closedChecksVisible, setClosedChecksVisible] = useState(false);
  const [selectedCheck, setSelectedCheck] = useState(null);
  const [mainCheckList, setMainCheckList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "checks"),
      (collectionSnapshot) => {
        const checks = [];
        collectionSnapshot.forEach((doc) => {
          checks.push({
            items: doc.data().items,
            open: doc.data().open,
            timeOpen: doc.data().timeOpen,
            totalPrice: doc.data().totalPrice,
            id: doc.id,
          });
        });
        setMainCheckList(checks);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

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

  const handleAddingCheckToCheckList = async (newCheckData) => {
    const collectionRef = collection(db, "checks");
    await addDoc(collectionRef, newCheckData);
    // setFormVisibleOnPage(false);
  }

  // const handleAddingCheckToCheckList = (newCheck) => {
  //   const newMainCheckList = mainCheckList.concat(newCheck);
  //   setMainCheckList(newMainCheckList);
  // };

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

  const handleDeletingCheck = async (id) => {
    await deleteDoc(doc(db, "checks", id));
    handleListClick();
  } 

  // const handleDeletingCheck = (checkId) => {
  //   const newCheckList = mainCheckList.filter((check) => check.id !== checkId);
  //   setMainCheckList(newCheckList);
  // };

  const handleEditingCheckInList = async (checkToEdit) => {
    const checkRef = doc(db, "checks", checkToEdit.id);
    await updateDoc(checkRef, checkToEdit);
    // setEditing(false);
    // setSelectedTicket(null);
  }

  // const handleEditingCheckInList = (newCheck) => {
  //   const oldList = mainCheckList.filter((check) => check.id !== newCheck.id);
  //   const newList = oldList.concat(newCheck);
  //   setMainCheckList(newList);
  // }

  let currentlyVisibleState = null;
  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (selectedCheck != null) {
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
