import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAppBar from './Header';
// import Content from './Content';
// import Loginscreen from './Loginscreen';
import SimpleBottomNavigation from './Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
            testline: "Heading of table",
            det : [],
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
        this.setStateHandler = this.setStateHandler.bind(this)
        this.setStateRemove = this.setStateRemove.bind(this)
    };
        setStateHandler(){
            var item = "Test "
            var myarray = this.state.det.slice()
                myarray.push(item)
            this.setState({det : myarray})
        }
        setStateRemove(){
            var item = "Test "
            var myarray = this.state.det.slice()
                myarray.pop(item)
            this.setState({det : myarray})
        }
    render(){
        return(
            <div>
              <ButtonAppBar />
              <h1>{this.state.testline}</h1>
                <table>
                    <tr>
                        {this.state.data.map((person, i) => <TableRow key = {i} 
                        data = {person}/>)}
                    </tr>
                </table>

                <hr></hr>
                <div>
                    <h3>Array: {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                    <h3>Func: {this.props.propFunc(3)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                    <h3>Object: {this.props.propObject.objectName1}</h3>
                    <h3>Object: {this.props.propObject.objectName2}</h3>
                    <h3>Object: {this.props.propObject.objectName3}</h3>
                </div>

                <hr></hr>
                <button onClick = {this.setStateHandler}>Item added</button>
                <button onClick = {this.setStateRemove}>Item removed</button>
                <h4>State Array: {this.state.det}</h4>

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

App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
 }
 
App.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",
    
    propObject: {
       objectName1:"objectValue1",
       objectName2: "objectValue2",
       objectName3: "objectValue3"
    }
}

export default App;
