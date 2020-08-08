import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
export default function Userpage() {
    return (<div>
        <Container component="main" maxWidth="md">
            <Typography component="h1" variant="h4"  >

                <Box fontWeight="fontWeightBold" >
                    Create a Post
         </Box>
                     </Typography>
            <br>
            </br>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="post_title"
                label="Post title"
                name=""
                autoFocus
                
            />
            <br></br>

            <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder=".. Write somthing" fullWidth  style={{width:908, height:200,marginTop:25}}/>
        <br></br>
        <Button  type="submit"  variant="contained" disabled    style={{marginTop:18,   }}> Done </Button>
         
        </Container>


    </div>);
}