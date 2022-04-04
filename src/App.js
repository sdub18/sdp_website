import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Confirmation from './confirmation.js';
import Contact from './contact.js';
import Home from './home.js';
import MeetTheTeam from './meet-the-team.js';
import Lunabotics from './nasa-lunabotics-2020-2021.js';
import Sponsors from './sponsors.js';

const useStyles = makeStyles({
  root: {
    margin: -10
  }
});

function App() {
  const classes = useStyles();

  return (
    <HashRouter>
    <Switch>  
    <div className={classes.root}>
      <header className="App-header"></header>
      {
        document.title = 'UMass Robotics'
      }
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/meet-the-team" render={props => <MeetTheTeam {...props} />} />
      <Route exact path="/nasa-lunabotics-2020-2021" render={props => <Lunabotics {...props} />} />
      <Route exact path="/contact" render={props => <Contact {...props} />} />
      <Route exact path="/sponsors" render={props => <Sponsors {...props} />} />
      <Route exact path="/confirmation" render={props => <Confirmation {...props} />} />
    </div>
    </Switch>
    </HashRouter>
  );
  
}

export default App;
