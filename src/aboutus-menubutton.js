import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
menubar: {
    backgroundColor: '#2C2C2C',
    boxShadow: 'none',
  },
root: {
    color: 'white',
    '&:hover': {
      backgroundColor: "transparent",
      color: "#9A1E1E"
   },
    fontWeight: 'bold',
    fontSize: 15,
    height: 60,
    width: 170
  },
menu_button: {
  backgroundColor: '#2C2C2C',
  color: 'white',
  '&:hover': {
    backgroundColor: "transparent",
    color: "#9A1E1E"
 },
  fontWeight: 'bold',
  fontSize: 12,
  height: 60,
  width: 170
  },
}));

export default function MouseOverPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
   setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button
        button aria-describedby={id}
        type="button"
        onClick={handleClick}
        className={classes.root}
      >
        ABOUT US
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ButtonGroup
          orientation="vertical"
          color="green"
          aria-label="vertical contained primary button group"
          disableElevation
          variant="contained"
          className={classes.menubar}
        >
          <Button href='/umr-react-website/#/meet-the-team' className={classes.menu_button} height={20}>MEET THE TEAM</Button>
          <Button href='/umr-react-website/#/nasa-lunabotics-2020-2021' className={classes.menu_button}>NASA LUNABOTICS 2020-2021</Button>
        </ButtonGroup>
      </Popper>
    </div>
  );
}
