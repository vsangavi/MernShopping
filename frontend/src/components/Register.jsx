import React from 'react';
import {Component} from 'react';
class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      name:'',
      mobile:''
    };
  }
  handlemobile=(event)=>
  {
    this.setState({
      mobile:event.target.value
    })
  }
  handleemail= (event) =>{
   this.setState({
     email:event.target.value
   })
  }
  handlename=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  handlepass=(event)=>{
   this.setState({
  password:event.target.value
  })
  }
  handlesubmit=(event)=>{
    alert(`${this.state.name} ${this.state.email}  ${this.state.mobile} ${this.state.password} `)
    event.preventDefault()
  }
  render(){
    return(
      <div>
        <h1>SIGN UP</h1>
        <form onSubmit={this.handlesubmit}>
        <div>
           <label>Name:</label>
           <input
           type="text"
           placeholder="Enter your name"
           value={this.state.name}
           onChange={this.handlename}
           /></div>
         <div>
           <label>Email:</label>
           <input
           type="email"
           placeholder="Enter valid mail id"
           value={this.state.email}
           onChange={this.handleemail}
           /></div>
              <div>
           <label>Mobile:</label>
           <input
           type="phone"
           placeholder="Enter mobile no"
           value={this.state.mobile}
           onChange={this.handlemobile}
           /></div>
           <div>
           <label>Password:</label>
           <input
           type="Password"
           placeholder="enter your password"
           value={this.state.password}
           onChange={this.handlepass}
           />  <br></br>
           </div>
           <center><button type="submit">Submit</button>
           </center>
         
      </form>
     </div> 
    )
    }
}
export default Register;