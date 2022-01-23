import React from 'react'

import classes from './Button.module.css';

// this is the submit button with changing button text depends if editing or creating new todo.
function Button(props) {
    const { edit } = props;
    return (
       <button className={classes.button} type='button' onClick={props.onClick}>{!edit.id ? 'Add' : 'Save'}</button>
    )
}

export default Button;
