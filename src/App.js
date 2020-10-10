import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import './App.css';

function App() {
  return (
  <Router>
     <div className="app">
      <Switch>
       <Route path="/checkout">
       <Header/>
        <h1>Checkout</h1> 
        </Route>
        <Route path="/login">
        <h1>Login</h1>  
        </Route>
        <Route path="/">
        <Header/>
        <h1>Home Page</h1> 
        <Home /> 
        </Route> 
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
