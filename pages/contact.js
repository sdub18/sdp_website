import Head from 'next/head'
import React, { useState } from 'react';
import Navbar from './../Components/navbar.js'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer/footer.js'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    width: '80%',
    justify: "center",
    maxWidth: '700px',
    margin: 'auto',

    '& label.Mui-focused': {
      color: '#9A1E1E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#9A1E1E',
    },
  },
  button:{
    margin: "auto",
    borderRadius: 10,
    marginBottom: 50,
    width: 100,
    padding: 15,
    backgroundColor: '#9A1E1E',
    color: 'white',
    '&:hover': {
      backgroundColor: "#312927",
    },
  },
  title:{
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'left',
    color: '#9A1E1E',
    marginBottom: 50,
  },
  textField: {
    marginBottom: 50,
  },
  margin: {
    '& .MuiTextField-root': {
      "&:nth-child(2)": {
        marginRight: 0
      },
      width: '49%',
      marginRight: '2%',
    },
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(null);
  const [content, setContent] = useState({firstName: '', lastName: '', email: '', subject: '', message: ''})

  // Description: Function that will make post request to server with contact information to then be exported to the umassrobotics email address.
  function submitEmail(data){
      const json = JSON.stringify(data);
      const res = axios.post('https://www.umassrobotics-website-backend.com/contact/', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        setSubmitted(true);
        alert('Message received. Thank you! We will try to get back to you as soon as possible.')
      }, (error) => {
        console.log(error)
        setSubmitted(false);
        alert('Message not received. Please try again later.')
      })
  }

  function resetForm(){
    setContent({firstName: '', lastName: '', email: '',subject:'', message: ''})
  }

  // Description: checks if all fields are correctly written first before sending request to email server
  function handleSubmit(content){
    if (content['firstName'] && content['lastName'] && content['email'] && content['subject'] && content['message'] && ValidateEmail(content['email'])){
      submitEmail(content)
    }
    else {
      if(!ValidateEmail(content['email']) && content['email']){
        return alert('Please enter a valid email address')
      }
      return alert('All fields must be filled.')
    }
  }

  function ValidateEmail(mail){
    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      return (true)
    }
    return (false)
  }

  return (
    <body style={{margin: "0"}}>
      <Head>
        <title>UMass Robotics - Contact</title>
      </Head>
      <div>
        <Navbar/>
          <div className={classes.root}>
            <Typography className={classes.title} variant = "h1" gutterBottom>Contact</Typography>
            <form noValidate autoComplete="off">
              <div className={classes.margin}>
                <TextField
                  className={classes.textField}
                  id="standard-full-width"
                  label="First Name"
                  onChange={(e) => {setContent({firstName: e.target.value, lastName: content.lastName, email: content.email, subject: content.subject, message: content.message})}}
                />
                <TextField
                  fullWidth
                  className={classes.textField}
                  id="standard-full-width"
                  label="Last Name"
                  onChange={(e) => {setContent({firstName: content.firstName, lastName: e.target.value, email: content.email, subject: content.subject, message: content.message})}}
                />
              </div>
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Email"
                fullWidth
                color='green'
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: e.target.value, subject: content.subject, message: content.message})}}
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Subject"
                fullWidth
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: content.email, subject: e.target.value, message: content.message})}}
              />
              <TextField
                id="standard-full-width"
                className={classes.textField}
                label="Message"
                fullWidth
                multiline
                onChange={(e) => {setContent({firstName: content.firstName, lastName: content.lastName, email: content.email, subject: content.subject, message: e.target.value})}}
              />
            </form>
            <Grid container alignItems="center">
              <Button className={classes.button} variant="contained" onClick={() => {handleSubmit(content)}}>
                Submit
              </Button>
            </Grid>
          </div>
        <Footer />
      </div>
    </body>
  )
}
