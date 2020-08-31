import React from 'react';
import './App.css';
import Welcome from './Components/welcome/Welcome';
import Clock from './Components/clock/Clock';
import Contact from './Components/contact/Contact'
import {Switch, Route } from 'react-router-dom'
import Navigation from './Components/navigation/Navigation';
import Error404 from './Components/error404/Error404'
import Jeopardy from './Components/jeopardy/Jeopardy';

function App() {
  return (

    <div className="App">

      <Navigation />
      <Switch>
        
      <Route
        exact path="/"
        render={(props) => <Welcome {...props}
          name="Giovanni" />}
      />
      <Route
      exact path="/Welcome/:name"  render = {(props) => <Welcome {...props} name = {props.match.params.name}/>} 
        
        />
      <Route
      exact path= "/Clock" component = {Clock} />
      <Route
      exact path = "/Contact" component = {Contact} />

      
        
        <Route 
        exact path = "/Jeopardy" component = {Jeopardy}
        />
        <Route 
        component = {Error404}
        />
      
      </Switch>
    </div>

  );
}

export default App;