import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GradeIcon from '@material-ui/icons/Grade';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: 'white'
  },
  nested: {
    position: "relative",
    left: 25
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        <ListItemLink button key={'Home'} href='/'><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary={'Home'} /></ListItemLink>
        <ListItem button key={'About Us'} onClick={handleClick}>
        <ListItemIcon><InfoIcon /></ListItemIcon><ListItemText primary={'About Us'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemLink button key={'Meet the Team'} className={classes.nested} href={'meet-the-team'}><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText primary={'Meet the Team'} /></ListItemLink>
        <ListItemLink button key={'NASA Lunabotics 2020-2021'} className={classes.nested} href={'nasa-lunabotics-2020-2021'}><ListItemIcon><GradeIcon /></ListItemIcon><ListItemText primary={'NASA Lunabotics 2020-2021'} /></ListItemLink>
        </List>
      </Collapse>
        <ListItemLink button key={'Contact'} href='contact'><ListItemIcon><MailIcon /></ListItemIcon><ListItemText primary={'Contact'} /></ListItemLink>
        <ListItemLink button key={'Sponsors'} href='sponsors'><ListItemIcon><PeopleIcon /></ListItemIcon><ListItemText primary={'Sponsors'} /></ListItemLink>
        <ListItemLink button key={'Donate'} href='https://www.gofundme.com/f/umass-robotics?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1' target='_blank'><ListItemIcon><AttachMoneyIcon /></ListItemIcon><ListItemText primary={'Donate'} /></ListItemLink>
        <ListItemLink button key={'Apply'} href='https://forms.gle/fAYZgDoUw859cnnF8' target="_blank"><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary={'Apply'} /></ListItemLink>
      </List>
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton className={classes.menuButton} onClick={toggleDrawer(anchor, true)}>{anchor}<MenuIcon /></IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}