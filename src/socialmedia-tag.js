import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  Text: {
    position: 'relative',
    backgroundColor: 'transparent',
    color:'white',
    fontFamily: 'Arial',
    fontWeight: 'Bold',
    fontSize: 15,
  },
  Icon: {
    padding: '10px',
    fontSize: 40,
    color:'white',
  }
});


export default function CopyrightTag(){
  const classes = useStyles();
  return(
    <div
      id='social media tag'
      className={classes.Text}
    >
      FOLLOW US ON SOCIAL MEDIA
      <Grid
        container
        direction='row'
        justify= 'space-evenly'
        alignItems= 'center'
      >
        <a href='https://www.instagram.com/umassrobotics/' target='_blank'>
          <InstagramIcon className={classes.Icon}/>
        </a>
        <a href='https://www.youtube.com/channel/UCpH514vygzjNv3PWWZNuKuA' target='_blank'>
          <YouTubeIcon className={classes.Icon}/>
        </a>
        <a href='https://github.com/UMass-Amherst-Robotics' target='_blank'>
          <GitHubIcon  className={classes.Icon}/>
        </a>
      </Grid>
    </div>
  )
}
