import React from 'react';
import Navbar from './../Components/navbar'
import Footer from '../Components/Footer/footer'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  whitespace: {
    minHeight: "100vh",
    position: "relative",
  },
  root: {
    paddingTop: 50,
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    [theme.breakpoints.down('xs')]: {
      fontSize: 35,
    },
    textAlign: 'left',
    color: '#9A1E1E',
    marginBottom: 20,
  },

  text:{
    fontSize: 30,
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
}));

export default function(){
  const classes = useStyles();

  return(
    <body style={{width: '100%', margin: "0"}}>
      <div>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Navbar/>
          <div className={classes.root}>
            <Typography className={classes.title} gutterBottom>Confirmation</Typography>
            <Typography className={classes.text} variant='h5' gutterBottom>Thank you for your interest with UMass Robotics. We have received your application. Please check your email for confirmation and follow the instructions.</Typography>
          </div>
          </Grid>
        <Grid item className={classes.footer}>
          <Footer/>
        </Grid>
        </Grid>
      </div>
    </body>
  )
}
