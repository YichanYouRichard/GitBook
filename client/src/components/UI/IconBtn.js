import React from 'react';
import classes from './IconBtn.module.css';

const IconBtn = (props) => {
    return (
        <button className={classes.btn}>
          <svg className={classes.icon}>{props.children}</svg>
        </button>
    );
};

export default IconBtn;