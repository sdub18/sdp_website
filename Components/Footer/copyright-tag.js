import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Text: {
    position: 'relative',
    backgroundColor: 'transparent',
    color:'white',
    fontFamily: 'Arial',
    fontWeight: 'Bold',
    fontSize: 12,
  },
});

export default function CopyrightTag(){
  const classes = useStyles();
  return(
    <div
      id='copyright tag'
      className={classes.Text}
      justifyContent= 'center'
      alignItems= 'center'
    >
      © UMass Robotics Club. All Rights Reserved.
    </div>
  )
}
