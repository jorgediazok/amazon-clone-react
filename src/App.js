import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Checkout from "./components/Checkout"
import './App.css';

function App() {
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
