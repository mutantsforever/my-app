import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="REGISTER" 
             style={{ backgroundColor: '#342c5c' }}
           /> */}
           <TextField
             hintText="Enter your First Name"
             floatingLabelFocusStyle={style.floatingLabelFocusStyle}
             underlineFocusStyle={style.underlineStyle}
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelFocusStyle={style.floatingLabelFocusStyle}
             underlineFocusStyle={style.underlineStyle}
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email ID"
             floatingLabelFocusStyle={style.floatingLabelFocusStyle}
             underlineFocusStyle={style.underlineStyle}
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             floatingLabelFocusStyle={style.floatingLabelFocusStyle}
             underlineFocusStyle={style.underlineStyle}
             hintText="Enter the Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" 
           backgroundColor= '#342c5c'
           labelColor= '#fff'
           style={style}
           buttonStyle={{ borderRadius: 25 }}
           onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }

//   handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
//     //To be done:check for empty values before hitting submit
//     var self = this;
//     var payload={
//     "first_name": this.state.first_name,
//     "last_name":this.state.last_name,
//     "email":this.state.email,
//     "password":this.state.password
//     }
//     axios.post(apiBaseUrl+'/register', payload)
//    .then(function (response) {
//      console.log(response);
//      if(response.data.code == 200){
//       //  console.log("registration successfull");
//        var loginscreen=[];
//        loginscreen.push(<Login parentContext={this}/>);
//        var loginmessage = "Not Registered yet.Go to registration";
//        self.props.parentContext.setState({loginscreen:loginscreen,
//        loginmessage:loginmessage,
//        buttonLabel:"Register",
//        isLogin:true
//         });
//      }
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//   }
}

const style = {
  margin: 15,
  floatingLabelFocusStyle: {
    color: '#272d50',
  },
  underlineStyle: {
    borderColor: '#272d50',
  },
  borderRadius: 25,
};
export default Register;

// errorText="This field is required"