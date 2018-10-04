import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet? Register Now.";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} 
               backgroundColor= '#342c5c'
               labelColor= '#fff'
               style={style}
               buttonStyle={{ borderRadius: 25 }}
               onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
//For validations

//   handleClick(event){
//     // console.log("event",event);
//     var loginmessage;
//     if(this.state.isLogin){
//       var loginscreen=[];
//       loginscreen.push(<Register parentContext={this}/>);
//       loginmessage = "Already registered? Go to Login.";
//       this.setState({
//                      loginscreen:loginscreen,
//                      loginmessage:loginmessage,
//                      buttonLabel:"Login",
//                      borderRadius: 25,
//                      isLogin:false
//                    })
//     }
//     else{
//       var loginscreen=[];
//       loginscreen.push(<Login parentContext={this}/>);
//       loginmessage = "Not Registered yet? Go to registration.";
//       this.setState({
//                      loginscreen:loginscreen,
//                      loginmessage:loginmessage,
//                      buttonLabel:"Register",
//                      borderRadius: 25,
//                      isLogin:true
//                    })
//     }
//   }
}
const style = {
  margin: 15,
  borderRadius: 25,
};
export default Loginscreen;