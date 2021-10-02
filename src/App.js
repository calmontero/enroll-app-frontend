import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import ProgramsContainer from "./components/ProgramsContainer/ProgramsContainer";
import { BASE_URL } from "./constraints/index";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + "/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  return (
    <main className="app" >
      <Navigation user={user} onLogout={handleLogout} />
      <Header user={user} />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <SignUp  />
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
