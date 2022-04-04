import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
      md: 600,
      lg: 825,
      xl: 905
    }
  }
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  imageHeight: {
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 350,
    },
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
    cursor: "default"
  },
  bodyHeight: {
    [theme.breakpoints.up('sm')]: {
      height: 240,
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
    },
    [theme.breakpoints.up('lg')]: {
      height: 260,
    },
    [theme.breakpoints.up('xl')]: {
      height: 200,
    },
    cursor: "default"
  },
});

const styles = {
  button: {
    width: 64,
    padding: 0,
  },
  icon: {
    fontSize: 50,
  }
};

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <Card cursor="default" className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.imageHeight}
          image={props.image}
          title="Card"
        />
        <CardContent className={classes.bodyHeight}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>

          <Typography gutterBottom variant="body2" component="h2">
            <b>{props.execRole}</b>
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Major:</b> {props.major}<br></br>
            {props.work}
            <b>Hobbies:</b> {props.hobbies}<br></br>
            <b>Favorite Dining Hall:</b> {props.diningHall}<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box mx="auto">
          {props.linkedInIcon}
          {props.gitHubIcon}
        </Box>
      </CardActions>
    </Card>
    </MuiThemeProvider>
  );
}