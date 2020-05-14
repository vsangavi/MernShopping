import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/nav.css';
import Shopee from '../productimg/youtube_profile_image.png';
let navbar1 = {backgroundColor: '#74B9FF'};
class Nav extends Component {
  
  render() { 
    
    return (
      <nav className="navbar navbar-light sm " style={navbar1} >
        <a className="navbar-brand"style={{backgroungcolor:'black'}}> 
        <div className="logo-image">
        <img src={Shopee} className="ima-fluid"></img>
        </div>
        
          </a>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
        <Link to='/product' className="nav-link">
          Products
          </Link>
          </li>
        </ul>
        
<Link to='/cart' className="ml-auto">

 <button>
   <i className="fas fa-cart-plus"></i>
   Cart
 </button>
</Link>
<button>Logout</button>
      </nav>
    );
  }
}
 
export default Nav;