import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@material-ui/core/Box';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// to update banner on home page, change tutorialSteps properties
const tutorialSteps = [
  {
    label: 'Applications',
    //imgPath: 'applications.png'
    imgPath: 'UMRBannerLogo.png'
    //href: /apply
  },
  {
    label: 'The Fellas',
    imgPath: 'TheFellas.jpg',
    //href:
  },
  {
    label: 'Lunabotics',
    imgPath: 'NewLunaboticsLogo.png',
    //href:
  },
];

const useStyles = makeStyles((theme) => ({
  root: {

    flexGrow: 1,
    background: //"#9A1E1E"
    '#2C2C2C'
  },
  stepper: {
    background: "#9A1E1E",
    width: '60%',
    alignItems:'center',
    justifyContent:'center'
  },
  images: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  img: {
    height: 400,
    paddingTop: "11px",
    [theme.breakpoints.down('xs')]: {
      height: 300
    },
    display: 'block',
    overflow: 'hidden',
    padding: '0 0 20px'
  },
  divider: {
    height: 8,
    background: //'#2C2C2C'
    "#9A1E1E",
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={8000}
        elevation={2}>
          {tutorialSteps.map((step, index) => (
            <div key={step.label} className={classes.images}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
                ):null}
            </div>
          ))}
      </AutoPlaySwipeableViews>
      <div className={classes.divider} />
    </div>
  );
}

export default SwipeableTextMobileStepper;
