import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Checkout from "./components/Checkout"
import {auth} from "./firebase";
import './App.css';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        //the user logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null, 
        })
      }
    })

  },[dispatch])


  return (
  <Router>
     <div className="app">
      <Switch>
       <Route path="/checkout">
       <Header/>
        <Checkout />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/">
        <Header/>
        <Home /> 
        </Route> 
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
