import React, { Component } from 'react';
import HomeView from './HomeView';
import NewCheck from './NewCheck';

class CheckControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCheckVisible: false,
    };
  }

  handleClick = () => {
    this.setState(prev => ({
      newCheckVisible: !prev.newCheckVisible
    }))
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.newCheckVisible) {
      currentlyVisibleState = (
        <NewCheck />
      )
      buttonText = "Home View";
    } else {
      currentlyVisibleState = (
        <HomeView />
      )
      buttonText = "New Check";
    }

    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
        
      </React.Fragment>
    )
  }
}


export default CheckControl;