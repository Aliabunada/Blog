import React  from 'react';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function ShowPost() {

  const [datas, setDatas] = useState([]);
  const [busy, setBusy] = useState(false);
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        var id = query.get('id');

      axios.get(`/api/posts/${id}`)
        .then(({ data }) => {
          console.log(data)
          setDatas(data);
          setBusy(true);
  
        }).catch(()=>{
         alert('There is Error in Database connection');
          
        })
  
  
    }, []);

    return(
      <div>
        {busy?(
        <div > <Typography style={{border: '1px solid black', marginLeft: 20 }} variant="h3" gutterBottom >
       {datas.title}
       </Typography>
 <br></br>
 <br></br>
       <Typography variant="h5" gutterBottom style={{border: '1px solid black', marginLeft: 20}}>   {datas.text} </Typography>
       </div>
        ):(<div></div>)}
  
      </div>
    )
    


}
