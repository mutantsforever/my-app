import React, { Component } from 'react';
import ButtonAppBar from './Header';
import Loginscreen from './Loginscreen';
import SimpleBottomNavigation from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <SimpleBottomNavigation />
        <Loginscreen />
      </div>  
    );
  }
}

export default App;
