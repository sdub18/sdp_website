import Head from 'next/head'
import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Footer from '../Components/Footer/footer.js'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 875,
      lg: 1280,
      xl: 1920
    }
  }
});

const useStyles = makeStyles({
  whitespace: {
    minHeight: "100vh",
    position: "relative",
  },
  root: {
    width: "90%",
    maxWidth: 1100,
    [theme.breakpoints.down('xs')]: {
      /*marginBottom: 15,*/
    }
  },
  quote: {
    width: "62.5%",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
    fontSize: 30,
    fontFamily: "Optima",
    textAlign: "center",
    lineHeight: 1.5
  },
  logo: {
    width: "35.5%",
    textAlign: "right",
    position: "relative",
    bottom: 10,
    left: "2.5%",
    [theme.breakpoints.down('sm')]: {
      top: 70
    },
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      left: "-5%",
      top: "initial",
      bottom: 20
    },
  },
  robot: {
    width: "47.5%",
    postion: "relative",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      marginBottom: 20
    },
  },
  caption: {
    fontSize: 16,
    fontFamily: "Optima",
    textAlign: "center"
  },
  description: {
    width: "45%",
    fontSize: 16,
    fontFamily: "Optima",
    lineHeight: 1.5,
    position: "relative",
    left: "7.5%",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      left: 0,
      textAlign: "center"
    },
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
});

export default function Contact() {
  const classes = useStyles()
  return (
    <body style={{margin: "0", position: "relative"}}>
      <Head>
        <title>UMass Robotics - NASA Lunabotics</title>
      </Head>
      <div>
        <Box className={classes.whitespace}>
        <Box mx="auto" className={classes.root} paddingBottom="150px">
        <Box pb={4}><Navbar/></Box>
          <Grid container>
            <Box component="div" display="inline" mb={5} className={classes.quote}>
              Our Goal:
            Build a robust, modular device that can monitor the health of a motor (or motors), display device metrics in a easily-digestible user interface, and alert the user when the safety and longevity of the device has become compromised.
            </Box>
            <Box component="div" display="inline" className={classes.logo}>
              <img width="90%" src={'demo.jpg'} />
            </Box>
            
            <Box component="div" display="inline" className={classes.robot}>
              <Box>
                <img width="100%" src={'pcb.png'} />
                <Box className={classes.caption}>
                  -A PCB view of our second prototype.
                </Box>
              </Box>
            </Box>
            <Box component="div" display="inline" className={classes.description}>
              System Specifications:
              
              Shall measure:
              Current being applied to motor
              In a range of 0 - 35 A
              Accuracy within 5% of true current value
              The motor's temperature and ambient temperature
              Can measure temperature between 30 to 115 degrees Celsius
              Accuracy within +/- 2 degrees Celsius of true temperature
              Precision within +/- 0.1 degrees Celsius of true temperature
              The motor’s acceleration (3D-axis)
              Accuracy within +/- 2 degrees
              Shall visualize:
              Current vs. time
              Power vs. time
              Temperature vs time
              Angular position vs. time
              Angular speed vs. time
              Shall allow the user to:
              Integrate external encoder 
              measure angular position and velocity from encoder data
              Shall alert the user through email or text about abnormal motor function
              Shall run for minimum 6 months before requiring charging

            </Box>
          </Grid>
        </Box>
        <Box className={classes.footer}><Footer /></Box>
        </Box>
      </div>
    </body>
  )
}
