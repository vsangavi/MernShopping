import React from 'react';
 //import {Link} from 'react-router-dom';

import '../Styles/nav.css';
//import Shopee from '../productimg/youtube_profile_image.png';
//let navbar1 = {backgroundColor: '#74B9FF'};
const Nav =(props)=>{
   
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <a className="navbar-brand" href="/product"><h5>Shopee</h5></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="/product"><h6>Products</h6></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart"><h6>Wishlist</h6></a>
      </li>
     
      
    </ul>
  </div>
</nav>
      </div>
    );
  }

 
export default Nav;