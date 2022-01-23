import React from 'react';
import classes from './Card.module.css';

// card design element and group together the app
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
