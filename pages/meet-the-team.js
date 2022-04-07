import Head from 'next/head'
import React from 'react';
import Navbar from './../Components/navbar.js'
import MediaCard from './../Components/Cards/card.js'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardIcon from './../Components/cardIcon.js'

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

  let execs = [
    {name: "Sam Dubois", image: "/Profiles/SamPicture.png", execRole: "PCB Design and Backend", major: "C.S. and Computer Engineering", work: <Work work="Electronics, programming" />, hobbies: "Rock climbing, machining", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/samuel-dubois/", linkedInIcon), gitHubIcon: icon('https://github.com/sdub18', gitHubIcon)},
    {name: "Mike Brauninger", image: "/Profiles/MikePic.png", execRole: "Frontend Design and Backend", major: "Computer Engineering", work: <Work work="Electronics, programming, website design" />, hobbies: "Frisbee, guitar, fishing", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/mbrauninger/", linkedInIcon), gitHubIcon: icon("https://github.com/mbrauninger", gitHubIcon)},
    {name: "Andrew Tran", image: "/Profiles/AndrewPicture.png", execRole: "Frontend Design and Embedded Systemss", major: "Computer Engineering", work: <Work work="Electronics, programming, website design" />, hobbies: "Cooking, personal coding projects", diningHall: "Worcester", linkedInIcon: icon("https://www.linkedin.com/in/umass-andrew-tran/", linkedInIcon), gitHubIcon: icon("https://github.com/andrewtran10", gitHubIcon)},
    {name: "Andy Gutierrez", image: "/Profiles/GutiPic.png", execRole: "PCB Design and Embedded Systems", major: "Computer Engineering", work: <Work work="Electronics, programming, website design" />, hobbies: "Piano, guitar, squash", diningHall: "Berk", linkedInIcon: icon("https://www.linkedin.com/in/andres-gutierrez-8758581a2/", linkedInIcon), gitHubIcon: icon("https://github.com/Andy-Guti", gitHubIcon)},
  ]

  let members = [
  ]

  return (
    <body style={{backgroundColor: "#ffffff", margin: 0}}>
      <Head>
        <title>UMass Robotics - Meet the Team</title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
          <Box mx="auto" mb={5} className={classes.root} mt={4}>
            <Box mb={4}>
              <Typography variant="h3" className={classes.header}>
               <b> Team Members</b>
              </Typography>
            </Box>
          <Grid container spacing={spacing}>
            {execs.map((person) => (
            <Grid item xs={xSmall} sm={small} md={medium}>
                <MediaCard name={person.name} image={person.image} execRole={person.execRole} major={person.major} work={person.work} hobbies={person.hobbies} diningHall={person.diningHall} linkedInIcon={person.linkedInIcon} gitHubIcon={person.gitHubIcon}/>
            </Grid>))}
          </Grid>
          <Box mt={8}>
          <Typography variant="h3">
             <hr></hr>
          </Typography>
          </Box>
        </Box>
        <Footer />
      </MuiThemeProvider>
    </body>
  )
}