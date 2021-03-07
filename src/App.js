import React from 'react';
import './App.css';
import Header from './Components/HEADER/Header';
import Shop from './Components/SHOP/Shop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import OrderReview from './Components/OrderReview/OrderReview';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
function App() {
  return (
      <div>
          <Router>
              <Header></Header>

              <Switch>
                  <Route exact path="/">
                      <Shop></Shop>
                  </Route>

                  <Route path="/review">
                      <OrderReview></OrderReview>
                  </Route>
                  <Route path="/product/:productKey">
                      <ProductDetails></ProductDetails>
                  </Route>

                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
