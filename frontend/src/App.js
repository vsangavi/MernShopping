
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Register from './components/Register';
import Product from './components/Product';
import Productlist from './components/Productlist';
import Cart from './components/Cart';
import  Nav from './components/Nav';
import Default from './components/Default';
import Details from './components/Details';
import Home from './components/Home';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isNavbarHidden:false
    };
  }
  render(){
    return( 

<React.Fragment>
 <div className="back" >
<Nav/>
  <Switch>
          <Route exact path='/'  component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/product'component={Product}/>
          <Route path='/productlist' component={Productlist}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/home' component={Home}/>
          <Route path='/details' component={Details}/>
          <Route  component={Default}/>
    </Switch>
    </div> 
</React.Fragment>










      
    )
  }
}


export default App;
