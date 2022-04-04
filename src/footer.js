import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import CopyrightTag from './copyright-tag.js';
import SocialMediaTag from './socialmedia-tag.js';

const useStyles = makeStyles((theme) => ({
  Box: {
    position: 'sticky',
    height: "100px",
    background: "#2C2C2C",
    padding: '25px 0px 0px 0px',
  },
  Tag: {
    padding: '0px 0px 0px 0px'
  },
}));

export default function Footer(){
  const classes = useStyles();

  return (
    <Box
      className={classes.Box}
    >
      <Grid
        container
        direction='column'
        justify= 'center'
        alignItems= 'center'
      >
        <Grid item>
          <SocialMediaTag/>
        </Grid>
        <Grid item className={classes.Tag}>
          <CopyrightTag />
        </Grid>
      </Grid>
    </Box>
  )
}
