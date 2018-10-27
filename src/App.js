import React, { Component } from 'react';
import ButtonAppBar from './Header';
// import Content from './Content';
// import Loginscreen from './Loginscreen';
import SimpleBottomNavigation from './Footer';
import './App.css';

class App extends Component {
  constructor(){
    super();
        this.state = {
            data : 
                [
                    {
                        "id":1,
                        "name":"Rohit",
                        "gender": "M"
                    },
                    {
                        "id":2,
                        "name":"Sneha",
                        "gender": "F"
                    },
                    {
                        "id":3,
                        "name":"Panda",
                        "gender": "F"
                    }
                ]
        }
    }
    render(){
        return(
            <div>
              <ButtonAppBar />
                <table>
                    <tr>
                        {this.state.data.map((person, i) => <TableRow key = {i} 
                        data = {person}/>)}
                    </tr>
                </table>
              <SimpleBottomNavigation />
            </div>
        );
    }
  // render() {
  //   // var myStyle ={
  //   //   fontSize: 100,
  //   //   color: '#FF0000'
  //   // }
  //   return (
  //     <div>
  //       <ButtonAppBar />
  //       {/* <Content /> */}
  //       <SimpleBottomNavigation />
  //       {/* <h1 style = {myStyle}>Content</h1> */}
  //       {/* <Loginscreen /> */}
  //     </div>  
  //   );
  // }
}

class TableRow extends React.Component {
  render() {
     return (
       <div>
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.gender}</td>
          </tr>
       </div>
     );
  }
}

export default App;
