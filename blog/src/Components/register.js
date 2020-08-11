import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import $ from "jquery";
import { useState } from 'react';
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
export default function Signup() {
    const classes = useStyles();
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(event.target.value,'this is the value in handle change')
    };


    var sending = (event) => {

        event.preventDefault();
        $.ajax({
            url: '/api/users',
            type: "post",
            data: values,
            dataType: 'json',
            success: (data) => {
                
                
            localStorage.setItem('ng-blog',data.token);
            window.location.replace(`/admin?id=${values.username}`);
                // alert("success send!!!")
                // window.location.replace('/admin');
            },

            error: (err) => {
                alert("The username is exists, Try anotherone");
                console.log('err', err);
            }
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h4" variant="h4">
                    Sign up
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
                        label="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange('password')}
                    />
                    <br></br>
                    <Button type="submit" variant="contained"  fullWidth style={{ marginTop: 18, }} onClick={sending}> singnup </Button>

                </form>
                <br></br>

                <Typography component="h1" variant="h5" style={{ marginTop: 18, }}>
                    Already have an account?
        </Typography>
                <br>
                </br>
                <Button variant="contained" color="secondary" onClick={() => {
                    window.location.replace('/auth')
                }} >signin</Button>
            </div>
        </Container>
    );
}