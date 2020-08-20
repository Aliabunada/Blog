import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import cat from '../images/cat.jpeg';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 1000,
  },
  media: {
    height: 140,
  },
  grid: {
    marginLeft: 100,
    marginRight: 70,
    border: "#FFF",
    height: 1000,

  }

});

export default function Mainpage() {
  const classes = useStyles();
  const [busy, setBusy] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(({ data }) => {
        setDatas(data);
        setBusy(true);

      }).catch(()=>{
       alert('There is Error in Database connection');
        
      })


  }, []);
  return (
    <div  >
       {busy ? (
      <GridList cols={3} >
        {datas.map((data, i = 0) => (
          <Card className={classes.root} key={i++} style={{ margin: 20 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="60"
                image={cat}
                title="Contemplative Reptile"
              />
              <CardContent onClick={() => {
                
                window.location.replace(`/article/?id=${data._id}`)
              }}> 
                <Typography gutterBottom variant="h6" component="h6">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => {
                window.location.replace(`/article/?id=${data._id}`)
                
              }}>
                show more..
        </Button>

            </CardActions>
          </Card>
        ))}
      </GridList>
      ):(
        <h1 style={{color:'red'}}> </h1>
      )}
    </div>
  );
}
