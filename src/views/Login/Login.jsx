import React, { Component } from 'react';
/*import axios from 'axios';
axios.get('/api/').then(resp => {
  console.log('Response', resp)
}).catch(err => {
  console.log('Error', err.response.status)
});*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import axios from 'axios';
var apiBaseUrl = "http://localhost:8000/";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

axios.post('http://localhost:8000/login/', { username: 'eric', password: 'Kafuuchino7'})
  .then(rv => {
    console.log('Login', rv)
    updateStuff();
  })
  .catch(err => {
    console.log('Login error', err.response)
  })
const updateStuff = () => {
  axios.patch('http://localhost:8000/api/stuffs/1/', { quantity: 2 })
    .then(resp => {
      console.log('Update response', resp)
    })
    .catch(error => {
      console.log("Update error", error)
    })
}

class Login extends Component {
 constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }
  }
  handleClick(event){
    var self = this
    console.log(this)

   var payload={
      "username":this.state.username,
      "password":this.state.password,
    }
    
 

    axios.post(apiBaseUrl+'login/', payload)
     .then(rv => {
    console.log('Login', rv)
    updateStuff();
    
  })
  .catch(err => {
    console.log('Login error', err.response)
  })
  const updateStuff = () => {
  axios.patch('http://localhost:8000/api/stuffs/1/', { quantity: 5 })
    .then(resp => {
      console.log('Update response', resp)
    })
    .catch(error => {
      console.log("Update error", error)
    })
  }
}
onEnterPress = (e) => {
  if(e.keyCode == 13 && e.shiftKey == false) {
    e.preventDefault();
    this.handleClick(e)
  }
}

  render() {
    return (
<center>
          <form style={{width:"400px", background:"#EEEEEE"}}>

        <h2>Login</h2>

         <TextField
             onKeyDown={this.onEnterPress}
           label="Ingrese su nombre de usuario"
           onChange = {(event,newValue)=>this.setState({username:newValue})}
            style={{width:"300px"}}
           />
         <br/>
           <TextField
             onKeyDown={this.onEnterPress}
             type="password"
             label="Ingrese su contraseña"
             onChange = {(event,newValue) => this.setState({password:newValue})}
            style={{width:"300px"}}
             />
           <br/>
           <Button variant="raised" ref={el => this.miSubmit = el} type="submit" label="Submit" primary={true} color="primary" style={style} onClick={(event) => this.handleClick(event),this.handleClick.bind(this) }>Ingresar</Button>	
       </form>
      
</center>
    );
  }
}

  const style = {
  margin: 15,
};
export default Login;