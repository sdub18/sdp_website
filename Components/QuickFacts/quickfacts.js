import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Typography from '@material-ui/core/Typography';

// Local imports
import QuickFactTile from './quickfact-tile.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: "#9A1E1E",
    },
    title: {
      fontWeight: 'bold',
      padding: '40px',
      textAlign: 'center',
      color: '#FFFFFF'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    link:{
      color:'transparent',
      textdecoration: 'none'
    }
  }));

const QuickFacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant = "h3" gutterBottom>
        Quick Facts
      </Typography>
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
      >
        <Grid item xs={5}>
            <Fade timeout={2500}>
              <QuickFactTile
                title="4"
                text="Team Members"
                img="/people-red.png"
              />
            </Fade>
        </Grid>
        
        <Grid item xs={5}>
            <Fade timeout={2500}>
              <QuickFactTile
                title="500"
                text="Dollar Budget"
                img="/trophy-red.png"
              />
            </Fade>
        </Grid>
        
        <Grid item xs={5}>
          <Fade timeout={2500}>
            <QuickFactTile
              title="3"
              text="Prototypes"
              img="/robot-red.png"
            />
          </Fade>
        </Grid>
        <Grid item xs={5}>
          <Fade timeout={2500}>
            <QuickFactTile
              title="100+"
              text="Hours of Work"
              img="/calendar-red.png"
            />
          </Fade>
        </Grid>
      </Grid>
    </div>
  )
}

export default QuickFacts;
