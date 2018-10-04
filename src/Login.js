import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import axios from 'axios';


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Username"
             floatingLabelFocusStyle={style.floatingLabelFocusStyle}
             underlineFocusStyle={style.underlineStyle}
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               floatingLabelFocusStyle={style.floatingLabelFocusStyle}
               underlineFocusStyle={style.underlineStyle}
               hintText="Enter the Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit"
             style={style}
             
             buttonStyle={{ borderRadius: 25 }}
             backgroundColor= '#342c5c'
             labelColor= '#fff'
             onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );

    
  }

//   handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload={
//     "email":this.state.username,
//     "password":this.state.password
//     }
//     axios.post(apiBaseUrl+'login', payload)
//     .then(function (response) {
//     console.log(response);
//     if(response.data.code == 200){
//     console.log("Login successfull");
//     var uploadScreen=[];
//     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//     }
//     else if(response.data.code == 204){
//     console.log("Username password do not match");
//     alert("username password do not match")
//     }
//     else{
//     console.log("Username does not exists");
//     alert("Username does not exist");
//     }
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
//     }
}


const style = {
 margin: 15,
 floatingLabelFocusStyle: {
  color: '#272d50',
},
underlineStyle: {
  borderColor: '##272d50',
},
borderRadius: 25,


};
export default Login;