import React, { Component } from "react";
import HomeView from "./HomeView";
import NewCheck from "./NewCheck";
import OpenChecksList from "./OpenChecksList";

class CheckControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCheckVisible: false,
      openChecksVisible: false,
      mainCheckList: [
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
      ],
    };
  }

  handleHomeClick = () => {
    this.setState((prev) => ({
      newCheckVisible: false,
      openChecksVisible: false,
    }));
  };

  handleNewClick = () => {
    this.setState((prev) => ({
      newCheckVisible: true,
      openChecksVisible: false,
    }));
  };

  handleListClick = () => {
    this.setState((prev) => ({
      newCheckVisible: false,
      openChecksVisible: true,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    // let buttonText = null;

    if (this.state.newCheckVisible) {
      currentlyVisibleState = <NewCheck />;
      // buttonText = "Home View";
    } else if (this.state.openChecksVisible) {
      currentlyVisibleState = (
        <OpenChecksList checkList={this.state.mainCheckList} />
      );
    } else {
      currentlyVisibleState = <HomeView />;
      // buttonText = "New Check";
    }

    return (
      <React.Fragment>
        <button onClick={this.handleHomeClick}>Home</button>
        <button onClick={this.handleNewClick}>New Check</button>
        <button onClick={this.handleListClick}>OpenChecksList</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default CheckControl;
