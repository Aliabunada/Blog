import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        position: 'absolute',
        right: 0,


    },
    t: {
        textAlign: 'center',

        color: '#000',


    },
}));
export default function NavBar() {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>

                        <Button color="inherit" onClick={() => {
               
                             window.location.replace('/')
                        }} >ngBlog</Button>

                        <div className={classes.title}>

                        <Button color="inherit" onClick={() => {
                                return window.location.replace('/blogs')
                            }}>blog</Button>

                            <Button color="inherit" onClick={() => {
                                return window.location.replace('/admin')
                            }}>Admin</Button>

                            <Button color="inherit" onClick={() => {
                                return window.location.replace('/auth')
                            }}>Signin</Button>

                        </div>

                    </Toolbar>
                </AppBar>
                <br></br>
                <br></br>
                {/* <Typography variant="h4" className={classes.t} >
                            The latest from the blog
                         </Typography> */}

            </div>


        </div>
    );


}
