import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    }
  });

const useStyles = makeStyles({
    icon: {
      fontSize: 50,
    }
  });

export default function CardIcon(props) {
    const classes = useStyles();
    return (
        <IconButton className={classes.icon} color="primary" href={props.link} target="_blank">
            {props.icon}
        </IconButton>
    )
}