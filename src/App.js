import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import ProgramsContainer from "./components/ProgramsContainer/ProgramsContainer";
import PeopleContainer from "./components/PeopleContainer/PeopleContainer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custom: {
    color: "#F3E7E4",
    fontWeight: "bold"
  }
});

function App() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [people, setPeople] = useState([]);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    localStorage.clear();
    setUser(null);
  }

  function handlePeople(peopleData) {
    setPeople(peopleData);
  }

  function handleUpdatePeople(peopleData) {
    setPeople(peopleData);
  }

  return (
    <main className="app" >
      <Navigation user={user} onLogout={handleLogout} />
      {user ? <Header user={user} onSelectPeople={handlePeople} /> : null}
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <SignUp onLogin={handleLogin} />
        </Route>
        <Route exact path="/programs">
          <ProgramsContainer />
        </Route>
        <Route exact path="/people">
        {user ? <PeopleContainer user={user} people={people} onUpdatePeople={handleUpdatePeople} /> : 
          <Typography variant="h4" component="h4" gutterBottom align="center" className={classes.custom}>
            You must have to Login
          </Typography>}
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
