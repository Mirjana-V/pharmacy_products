import React from "react";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import classes from './MainNavigation.module.css';

const Layout = ({ children }) => {
    return <Fragment>
        <MainNavigation />
        <main className={classes['main-content']}>{children}</main>
    </Fragment>
}

export default Layout;