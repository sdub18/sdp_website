/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import MediaCard from './../Components/Cards/card.js'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardIcon from './../Components/cardIcon.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 850,
    width: "80%"
  },
  header: {
    color: "#9A1E1E"
  },
  icon: {
    fontSize: 50,
  },
  image1: {
      height: "500px"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#1565c0',
      dark: '#ba000d',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#212121',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
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

export default function Team() {
  const classes = useStyles()
  const spacing = 5
  const xSmall = 12
  const small = 6
  const medium = 4

  const linkedInIcon =  <LinkedInIcon className={classes.icon}></LinkedInIcon> 
  const gitHubIcon =   <GitHubIcon color="secondary" className={classes.icon}/>
  
  function icon(link, icon) {
    return <CardIcon link={link} icon={icon} />
  }

  function Work(props) {
    return <div><b>What I Work On:</b> {props.work}<br></br></div>
  }

  return (
    <body style={{backgroundColor: "#ffffff", margin: 0}}>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
          <Box mx="auto" mb={5} className={classes.root} mt={4}>
            <Box mb={4}>
              <Typography variant="h3" className={classes.header}>
               <b>Photos</b>
              </Typography>
            </Box>
          <Grid container spacing={spacing}>
            <Grid item xs={xSmall} sm={small} md={medium} className={classes.grid}>
                <img src="./TheFellas.jpg" className={classes.image1}></img>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </MuiThemeProvider>
    </body>
  )
}