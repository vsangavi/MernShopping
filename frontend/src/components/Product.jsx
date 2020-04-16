import React, { Component } from 'react';
 //import Image from "../productimg/image1.jpg"
import { Link } from 'react-router-dom';
import {data} from"../data/products";
class Product extends Component {
  state={
    products:data
  }
  render() { 
    console.log(this.state.products);
    return (
      <div>
        <img src={Image}
         alt="hai">
         </img>
       <div><Link to='/cart'><button>Add to cart</button></Link> <Link to='/cart'><button>Add to wishlist</button></Link>
       </div> 
      </div>
    );
  }
}
 
export default Product;