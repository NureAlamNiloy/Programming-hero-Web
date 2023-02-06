import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Compnents/Hesder/Header';
import Shop from './Compnents/Shop/Shop';
import Review from './Compnents/Review/Review';
import NotFound from './Compnents/Notfound/NotFound';
import ProductDetail from './Compnents/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/manage'>
            <h1>Comming Soon.....</h1>
          </Route>
          <Router exact path='/'>
            <Shop></Shop>
          </Router>
          <Route path='/product/:Productkey'>
            <ProductDetail></ProductDetail>
          </Route>
          <Router path='*'>
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
