import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
//import SimpleReactValidator from 'simple-react-validator';
//import {fomik} from 'formik';
//import * as Emailvalidator from 'email-validator';
//import * as Yup from 'yup';
class Login extends Component{
  
    constructor(props) {

      super(props);
      this.state = {
        email:'',
        password:'',
      };
    }
    handleemail= (event) =>{
     this.setState({
       email:event.target.value
       
     })
    }
    handlepass=(event)=>{
     this.setState({
    password:event.target.value
    })
    }
    handlesubmit=(event)=>{
      
      alert(`${this.state.email} ${this.state.password}`)
      
     
      event.preventDefault()
    }
  render(){
    return(
    <div>
      <br/><br/>
        <h1>LOGIN</h1>
        <form onSubmit={this.handlesubmit}>
         <div>
           <label>Email:</label>
           <input
           type="text"
           placeholder="Enter valid mail id"
           value={this.state.email}
           onChange={this.handleemail}
           />
            
           <div>
           <label>Password:</label>
           <input
           type="Password"
           placeholder="Enter your password"
           value={this.state.password}
           onChange={this.handlepass}
           /> 
           <br></br> 
           </div>
           <center><button type="submit">Submit</button>
           <Link to='/register'>
             <h4>New user?Sign Up</h4>
           </Link>
           </center>
         </div>
      </form>
      
     </div> 
 
    )
    }
}
export default Login;