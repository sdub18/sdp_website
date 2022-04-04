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
            "The annual RMC: Lunabotics competition is a full-on engineering exercise where students receive practical experience in the full engineering lifecycle process from concept development to system closeout."<br></br>
            -NASA
            </Box>
            <Box component="div" display="inline" className={classes.logo}>
              <img width="90%" src={'NewLunaboticsLogo.png'} />
            </Box>
            
            <Box component="div" display="inline" className={classes.robot}>
              <Box>
                <img width="100%" src={'NASARobot.jpg'} />
                <Box className={classes.caption}>
                  -A robot in the RMC: Lunabotics competition.
                </Box>
              </Box>
            </Box>
            <Box component="div" display="inline" className={classes.description}>
            The goal of NASA's Moon to Mars trajectory is to enable human exploration of Mars by the year 2024. To support this objective, NASA hosts the annual RMC: Lunabotics competition. Teams participating in the competition must design a robot capable of traversing an obstacle-filled, abrasive environment similar to the surface of Mars, and digging up to a depth of 45 cm for gravel. The robot must collect this gravel and deposit it in a drop zone. For more information on the competition, visit the <a target="_blank" href="https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html">NASA</a> website. The rules for the competition can be found <a target="_blank" href="https://www.nasa.gov/sites/default/files/atoms/files/00_rmc2020_registration_rules_rubrics.pdf">here</a>.
            </Box>
          </Grid>
        </Box>
        <Box className={classes.footer}><Footer /></Box>
        </Box>
      </div>
    </body>
  )
}
