import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function CommonButton(props) {

  const useStyles = makeStyles((theme) => ({
    button: {
      borderRadius: 10,
      color: 'white',
      backgroundColor: "#9A1E1E",
      '&:hover': {
        backgroundColor: "#2C2C2C",
     },
      fontSize: 12,
      height: 60,
      width: props.width
      },
    }));

    const classes = useStyles();
    return (
        <Button className={classes.button} variant={props.variant}>{props.text}</Button>
    );
}