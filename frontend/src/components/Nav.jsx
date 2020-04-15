import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component {
  render() { 
    return (
      <nav className="navbar navbar-expand-sm bg-dark" >
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