import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import ProgramsContainer from "./components/ProgramsContainer/ProgramsContainer";


function App() {

  return (
    <main className="app" >
      <Navigation  />
      <Header  />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login  />
        </Route>
        <Route exact path="/programs">
          <ProgramsContainer />
        </Route>
        <Route exact path="/programs/:id">
          
        </Route>
        {/* keep the "*" path at the end */}
        <Route path="*">
          <h1>404 Not Found :c</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
