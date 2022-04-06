import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 825,
      lg: 975,
      xl: 1660
    }
  }
});

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  title:{
    color: "#9A1E1E",
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: '10px'

  },
  text:{
    maxWidth: 800,
  },
  button:{
    marginTop: theme.spacing(3.75),
    borderRadius: 10,
    padding: 15,  
    backgroundColor: '#9A1E1E',
    color: 'white',
    '&:hover': {
      backgroundColor: "#312927",
    }
  },
  img: {
    width: "100%",
    maxWidth: 700,
    [theme.breakpoints.up('xl')]: {
      marginTop: 0
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: -35
    },
  }, 
}));


export default function Introduction() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={10}
      >
        <Grid item align="center">
        <Typography className={classes.title} gutterBottom>
          Why Motor Health Analysis?
        </Typography>
        <Typography className={classes.text} variant = 'body1' gutterBottom>
        Motors are an incredibly useful tool in a variety of applications. Thousands of real world systems hinge on these powerful devices.
        When it comes to diagnostics, these devices are mostly black boxes. Unless you are purchasing a very specific type of motor, generally the health of the motor is unknown.
        How can a user monitor the health of their motors, and thereby their systems, without compromising on the design of these systems?
        </Typography>
        <Button className={classes.button} variant='contained' href='about-us'>
        THE SOLUTION
        </Button>
      </Grid>
      <Grid item>
        <img src="/guti2.jpeg" alt="TheFellas" className={classes.img}/>
      </Grid>
    </Grid>
    </div>
    </MuiThemeProvider>
  )
}
