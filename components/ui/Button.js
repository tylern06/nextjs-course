import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

export default function Button(props) {
  return props.link ? (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
