import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import axios from 'axios';
import $ from "jquery";


export default function Userpage() {
  const [datas, setDatas] = useState([]);
  const [busy, setBusy] = useState(false);
  const [values, setValues] = useState({
    title: '',
    text: '',
    author: datas.username,
  
  });


  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    var id = query.get('id');

    axios.get(`/api/users/${id}`)
      .then(({ data }) => {
        console.log(data, " ////data from makepost");
        setDatas(data);
        setBusy(true);

      }).catch(()=>{
       alert('PLEASE Signin, You are not Authorized')
        window.location.replace('/auth')
      })


  }, []);


  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };

  var sending = (event) => {
    var token = localStorage.getItem('ng-blog');
    event.preventDefault();

    $.ajax({
      url: `/api/posts?access_token=${token}`,
      type: "post",
      data: values,
      dataType: 'json',
      success: (data) => {

        alert('Done')
        window.location.replace('/blogs')
      },

      error: (err) => {
        alert("FAILD")
        console.log('err', err);
      }
    });
  }
  return (<div>
    {busy ? ( <Container component="main" maxWidth="md">
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
        onChange={handleChange('title')}
      />

      <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder=".. Write somthing" onChange={handleChange('text')} style={{ width: 908, height: 200, marginTop: 20 }} />

      <Button type="submit" variant="contained" color="secondary" onClick={sending} style={{ marginTop: 13, }}> Done </Button>

    </Container>
):(
  <h1> </h1>
)}
   

  </div>);
}