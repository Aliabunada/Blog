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
import Userpage from './Components/makepost'
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
          <Route exact path="/"  component={Ngblogs} ></Route>

          <Route exact path="/admin"  component={Userpage} ></Route>

          <Route exact path="/auth"  component={Adminsignin} ></Route>

          <Route exact path='/blogs' exact component={Test}></Route>

          <Route exact path='/signup' exact component={Register}></Route>

        </Switch>
      </Router> 

    </div>
  );
}

export default App;
