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
          Welcome to UMass Robotics!
        </Typography>
        <Typography className={classes.text} variant = 'body1' gutterBottom>
          Looking for a fun and dynamic place to develop your engineering skills
          outside of the classroom? Look no further, because UMass Robotics is the
          perfect place for you! UMass Robotics is a student-run organization that
          gives members the opportunity to dive deep into the cutting-edge field of
          robotics. Members will gain experience in computer programming,
          electronics, and hardware design. Each year, our team works to build a
          robot that will compete in an annual competition. This year, the the team
          will compete in the NASA Lunabotics competition by building a mining robot
          capable of digging through sand and gathering "precious material," similar
          to what a robot might do on Mars. Our team is highly committed, and every
          member is guaranteed to learn valuable skills that can be applied in a
          workplace environment. UMass Robotics is an amazing place for students of
          all experience levels, and we hope to see you on the team!
        </Typography>
        <Button className={classes.button} variant='contained' href='meet-the-team'>
        MEET THE TEAM
        </Button>
      </Grid>
      <Grid item>
        <img src="/team-working.jpeg" alt="TheFellas" className={classes.img}/>
      </Grid>
    </Grid>
    </div>
    </MuiThemeProvider>
  )
}
