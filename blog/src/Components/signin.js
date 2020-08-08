import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import  { useState  } from 'react';
import $ from "jquery";

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function Adminsignin() {
    const classes = useStyles();
    const [values, setValues] =useState({
      username : '',
      password : ''
    });
    
    
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
 var sending = (event) => {

   event.preventDefault();
    $.ajax({
    url: '/auth/signin', 
    type : "post",
    data :values , 
    dataType : 'json',
    success: (data) => {

      alert("success send!!!")
      //  window.location.replace('/');
    }, 
      
    error: (err) => {
      alert("FAILD")
      console.log('err', err);
    }
  });
}

    return (
        <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h4" variant="h4">
     Sign in  
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange('username')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
          />
          <br></br>
          <Button  type="submit"  variant="contained"   fullWidth  style={{marginTop:18,   }}
          onClick={sending}
          > singnin </Button>
         
          </form>
          <br></br>
      
          <Typography component="h1" variant="h5" style={{marginTop:18, }}>
    Dont have an account? 
        </Typography>
        <br>
          </br>
        <Button variant="contained" color="secondary" onClick={()=>{
                     window.location.replace('/signup')
                    }}>signup</Button>
              </div>
              </Container>
    );
  }