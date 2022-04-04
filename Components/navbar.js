import React from 'react';
import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Link from 'next/link'
import AboutUsMenuButton from './aboutus-menubutton.js'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TemporaryDrawer from './../Components/sidenav.js'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: "80px",
    background: "white"
  },
  menubar: {
    backgroundColor: '#2C2C2C',
    boxShadow: 'none',
  },
  divider: {
    height: "10px",
    background: "#9A1E1E"
  },
  logo: {
    maxWidth: 70,
    padding: "20px 20px 20px 0"
  },
  menu_button: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
      color: "#9A1E1E"
   },
    fontWeight: 'bold',
    fontSize: 15,
    height: 60,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  apply_button: {
    borderRadius: 10,
    color: '#9A1E1E',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: "#9A1E1E",
      color: 'white'
   },
    fontWeight: 'bold',
    fontSize: 15,
    width: 90,
    height: 30,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  }
}));

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 825,
      lg: 1000,
      xl: 1200
    }
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <div className={classes.root}>
        <AppBar elevation={0} className={classes.menubar}>
          <Toolbar>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            >
              <Hidden lgUp>
              <IconButton edge="start" color="white" aria-label="menu">
                <Box position="absolute" left={2}><TemporaryDrawer position="relative" right={2}></TemporaryDrawer></Box>
              </IconButton>
              </Hidden>
              <Hidden lgUp>
                <Box mx="auto" position="relative" left={5}>
                  <a href='/'><img src="./umr-logo-white.png" alt="logo" className={classes.logo} href='/' /></a>
                </Box>
              </Hidden>
              <Hidden mdDown>
              <a href='/'><img src="./umr-logo-white.png" alt="logo" className={classes.logo} href='/' /></a>
              <Button className={classes.menu_button} color="inherit" href='/'>HOME</Button>
              <AboutUsMenuButton/>
              <Button className={classes.menu_button} color="inherit" href='/contact'>CONTACT</Button>
              <Link href='/sponsors'>
                <Button className={classes.menu_button} color="inherit">SPONSORS</Button>
              </Link>
              <Button className={classes.menu_button} color="inhereit" href='https://www.gofundme.com/f/umass-robotics?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1' target='_blank'>DONATE</Button>
              <Button className={classes.apply_button} color="inhereit" href='https://forms.gle/fAYZgDoUw859cnnF8' target="_blank">APPLY</Button>
              </Hidden>
            </Grid>
      </Toolbar>
    </AppBar>
    </div>
  </div>
  </MuiThemeProvider>
  );
}

export default Navbar;
