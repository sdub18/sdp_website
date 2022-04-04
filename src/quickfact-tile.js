import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion";
import { Box } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
        xs: 0,
        sm: 281,
        md: 725,
        lg: 960,
        xl: 1260
        }
    }
  });

const useStyles = makeStyles({
    flyoutTile: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(5),
        borderRadius: theme.spacing(5)
    },
    title:{
        fontWeight: 'bold',
        fontSize: 90,
        [theme.breakpoints.down('sm')]: {
            fontSize: 60
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 45
        },
        textAlign: 'left',
        [theme.breakpoints.down('lg')]: {
            textAlign: "center",
        },
        color: '#9A1E1E'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9A1E1E',
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 12
        },
    },
    logo: {
        width: 90,
        [theme.breakpoints.down('sm')]: {
            width: 60,
        },
        [theme.breakpoints.down('xs')]: {
            width: 45,
        }
    },
  });

const QuickFactTile = (props) => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0 }}>
                <Paper elevation={0} className={classes.flyoutTile}>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <Box><Typography variant = 'h1' className={classes.title}>
                            {props.title}
                            </Typography></Box>
                            <Box><Typography variant = 'h4' className={classes.text}>
                            {props.text} <Hidden smUp><br></br></Hidden> {props.text2}
                            </Typography></Box>
                        </Grid>
                        <Hidden lgDown>
                            <Grid item>
                                <img src={props.img} alt="" className={classes.logo} href='/' />
                            </Grid>
                        </Hidden>
                        <Hidden xlUp>
                            <Grid item xs={12}>
                                <img src={props.img} alt="" className={classes.logo} href='/' />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Paper>
            </motion.div>
        </MuiThemeProvider>
    );
}

export default QuickFactTile;
