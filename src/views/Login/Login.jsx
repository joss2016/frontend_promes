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
    //updateStuff();
  })
  .catch(err => {
    console.log('Login error-problema', err.response)
  })
const updateStuff = (e) => {
  axios.patch('http://localhost:8000/api/stuffs/1/', { quantity: 10 })
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
    //console.log(this)

   var payload={
      //"username":"eric",
        "username":this.state.username,
	  	"password":this.state.password,
      //"password":"Kafuuchino7",
    }
    
 console.log(payload)

    axios.post(apiBaseUrl+'login/', payload)
     .then(rv => {
    console.log('Login-2', rv)
    updateStuff();
    
  })
  .catch(err => {
    console.log('Login error-roblema-post', err.response),
    console.log('Login error-roblema-poste', err.message)
  })
   event.preventDefault();

     //return false

}
onEnterPress = (e) => {
  if(e.keyCode == 13 && e.shiftKey == false) {
    e.preventDefault();
    this.handleClick(e)
  }
}
  handleChange = username => event => {
    this.setState({
      [username]: event.target.value,
    });
  }
    handleChangeP = username => event => {
    this.setState({
      [username]: event.target.value,
    });
  }


  render() {
    return (
<center>
          <form style={{width:"400px", background:"#EEEEEE"}}>

        <h2>Login</h2>

         <TextField
            onKeyDown={this.onEnterPress}
            id="username"
             label="Ingrese su usuario"
		   	onChange={this.handleChange('username')}
            style={{width:"300px"}}
           />
         <br/>
           <TextField
             onKeyDown={this.onEnterPress}
             type="password"
             label="Ingrese su contraseña"
		   	onChange={this.handleChangeP('password')}
            style={{width:"300px"}}
             />
           <br/>
           <Button variant="raised" ref={el => this.miSubmit = el} type="submit" label="Submit"  color="primary" style={style} onClick={(event) => this.handleClick(event),this.handleClick.bind(this) }>Ingresar</Button>	
       </form>
      
</center>
    );
  }
}

  const style = {
  margin: 15,
};
export default Login;