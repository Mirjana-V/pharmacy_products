import React from 'react';
import classes from'./AboutApplication.module.css';

const AboutApplication = () => {
  return (
    <div className={classes.container}>
        <h2>About Application</h2>
        <p>Version: 1.0.0</p>
        <p>Created by: <span>Mirjana Veškovac</span></p>
    </div>
  )
}

export default AboutApplication;