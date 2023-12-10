import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './component/ProductList';
import AboutApplication from './component/AboutApplication';
import CreateProduct from './component/CreateProduct';
import MainNavigation from './layout/MainNavigation';
import EditProduct from './component/EditProduct';

const App = () => {
  return (
    <Router>
      <div>
        <MainNavigation />
        <div>
          <Switch>
            <Route exact path="/products"><ProductList /></Route>
            <Route exact path="/about"><AboutApplication/></Route>
            <Route exact path="/products/new"><CreateProduct/></Route>
            <Route exact path="/products/edit/:id"><EditProduct/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;