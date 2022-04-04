import Head from 'next/head'
import React from 'react';
import Navbar from './../Components/navbar.js'
import Footer from '../Components/Footer/footer.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider} from '@material-ui/core/styles';

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CorporateSponsors from '../Components/sponsors/corporatesponsors.js'
import GoldDonators from '../Components/sponsors/golddonators.js'
import SilverDonators from '../Components/sponsors/silverdonators.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 1280,
    width: "100%"
  },
  introduction: {
    fontWeight: 'bold',
    fontSize: '2rem',
    paddingTop: '30px',
    paddingLeft: '30px',
    paddingBottom: '10px'
  },
  divider: {
    width: '92%'
  },
  sponsors:{
    width: '80%'
  },
  donators: {
    maxWidth: 800
  }
});

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 825,
      lg: 900,
      xl: 1200
    }
  }
});

export default function Sponsors() {
  const classes = useStyles();
  return (
    <body style={{margin: 0, width:'100%', backgroundColor: "#f5f5f5"}}>
      <Head>
        <title>UMass Robotics - Sponsors</title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Box mx='auto' className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
              <Typography className={classes.introduction}>
                Thank you to our supporters and sponsors!
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <hr className={classes.divider}/>
        {/*
        <Box mx='auto' className={classes.sponsors}>
          <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
              <CorporateSponsors/>
            </Grid>
          </Grid>
        </Box>
        <hr className={classes.divider}/>
        */}
        <Box mx='auto' className={classes.donators}>
          <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
              <GoldDonators/>
            </Grid>
          </Grid>
        </Box>
        <hr className={classes.divider}/>
        <Box mx='auto' className={classes.donators}>
          <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
              <SilverDonators/>
            </Grid>
          </Grid>
        </Box>
        <Footer/>
      </MuiThemeProvider>
    </body>
  )
}
