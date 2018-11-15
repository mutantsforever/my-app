import React, { Component } from 'react';
import ButtonAppBar from './Header';
import SimpleBottomNavigation from './Footer';

class App extends Component {
  constructor(props){
    super(props);
  }

    render(){
        return(
            <div>
              <ButtonAppBar />
              
              <SimpleBottomNavigation />
            </div>
        );
    }
}

export default App;
