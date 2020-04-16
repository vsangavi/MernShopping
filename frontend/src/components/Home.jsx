import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render() { 
    return (
      <div><center>
    <h2>Welcome lets get Started!</h2>
    <Link to="/product"><button>Get Started</button></Link>
    </center>
      </div>
    );
  }
}
 
export default Home;