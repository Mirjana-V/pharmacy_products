import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Application</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;