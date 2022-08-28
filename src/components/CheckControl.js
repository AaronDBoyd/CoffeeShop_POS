import React, { Component } from 'react';
import HomeView from './HomeView';
import NewCheck from './NewCheck';
import OpenChecksList from './OpenChecksList';

class CheckControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCheckVisible: false,
      openChecksVisible: false,
      mainCheckList: [
        {
          name: "coffee",
          size: "large",
          price: 2,
          id: 1,
          open: true,
          timeOpen: "Sun Aug 28 2022"
        }
      ]
    };
  }

  handleHomeClick = () => {
    this.setState(prev => ({
      newCheckVisible: false,
      openChecksVisible: false
    }))
  }

  handleNewClick = () => {
    this.setState(prev => ({
      newCheckVisible: true,
      openChecksVisible: false
    }))
  }

  handleListClick = () => {
    this.setState(prev => ({
      newCheckVisible: false,
      openChecksVisible: true,
      
    }))
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.newCheckVisible) {
      currentlyVisibleState = (
        <NewCheck />
      )
      // buttonText = "Home View";
    } else if (this.state.openChecksVisible) { 
      currentlyVisibleState = (
        <OpenChecksList />
      )
    }else {
      currentlyVisibleState = (
        <HomeView />
      )
      // buttonText = "New Check";
    }

    return (
      <React.Fragment>
        <button onClick={this.handleHomeClick}>Home</button>
        <button onClick={this.handleNewClick}>New Check</button>
        <button onClick={this.handleListClick}>OpenChecksList</button>
        {currentlyVisibleState}
        
      </React.Fragment>
    )
  }
}


export default CheckControl;