import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    styled_button: {
        borderRadius: "1em",
        fontWeight: 'bold',
        height: '50px',
        width: '150px'
    },
  }));

export default function StyledButton(props) {
  const classes = useStyles();

  return (
    <Button onClick={() => {props.function}} className={classes.styled_button}>{props.title}</Button>
  );
}
