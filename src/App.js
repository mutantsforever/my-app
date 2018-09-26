import React, { Component } from 'react';
import ButtonAppBar from './Header';
import SimpleBottomNavigation from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <SimpleBottomNavigation />
      </div>  
    );
  }
}

export default App;
