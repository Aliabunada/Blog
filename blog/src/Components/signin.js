import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import red from 'material-ui/colors/red';
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
    return (
        <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h2" variant="h3">
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
          />
          <br></br>
          <Button  type="submit"  variant="contained" disabled  fullWidth  style={{marginTop:18,   }}> singnin </Button>
         
          </form>
          <br></br>
          <br>
          </br>
          <Typography component="h1" variant="h5" style={{marginTop:18, }}>
    Already have an account? 
        </Typography>
        <br>
          </br>
        <Button variant="contained" color="secondary" >signup</Button>
              </div>
              </Container>
    );
  }