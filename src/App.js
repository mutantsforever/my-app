import React, { Component } from 'react';
import ButtonAppBar from './Header';
import Login from './Login';
import SimpleBottomNavigation from './Footer';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        showLogin: false  // set a value in state to store whether or
                          // not to show the Modal
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {  // switch the value of the showModal state
    this.setState({
        showLogin: !this.state.showLogin
    });
  }
  getComponent() {
    if (this.state.showLogin) {  // show the modal if state showModal is true
      return <Login/>;
    } else {
      return null;
    }
  }
    render(){
        return(
            <div>
              <ButtonAppBar />
              <Button onClick={this.handleClick} label="Action"/>
                {this.getComponent}
              <SimpleBottomNavigation />
            </div>
        );
    }
}

export default App;
