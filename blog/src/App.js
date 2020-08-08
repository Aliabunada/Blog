import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import NavBar from './Components/navbar';
import Ngblogs from './Components/ngblogs';
import Adminsignin from './Components/signin'
import Register from './Components/register'
import Userpage from './Components/user'
import Test from './Components/mainpage'


function App() {
  return (
    <div >
      <div>
        <NavBar></NavBar>
        
      </div>
    
      <br></br>
      
       <Router>  
        <Switch>
          <Route path="/" exact component={Ngblogs} ></Route>

          <Route path="/admin" component={Userpage} ></Route>

          <Route path="/auth" component={Adminsignin} ></Route>

          <Route path='/blogs' component={Test}></Route>

          <Route path='/signup' component={Register}></Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
