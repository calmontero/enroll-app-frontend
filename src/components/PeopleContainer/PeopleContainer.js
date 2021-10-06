import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import PeopleForm from "../PeopleForm/PeopleForm";
import PeopleCard from "../PeopleCard/PeopleCard";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import EnrollContainer from "../EnrollContainer/EnrollContainer";

const useStyles = makeStyles({
  custom: {
    color: "#F3E7E4",
    fontWeight: "bold"
  }
});

function PeopleContainer({ user }) {
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  const [program, setProgram] = useState({
    programId: localStorage.getItem('program_id'),
    programName: localStorage.getItem('name')
  }) ;
  
  useEffect(() => {
    fetch(BASE_URL + `/users/${user.id}/people`)
    .then((response) => response.json())
    .then((peopleData) => setPeople(peopleData));
  }, []);

    return (
      <div className="people-container">
        {user ? (
          <div> 
            {people ? null : <PeopleForm user={user} />}
            {people ? <PeopleCard people={people} setPeople={setPeople} user={user} /> : null}
            {people ? <EnrollContainer program={program} people={people} user={user} /> : null}
          </div>
          
        ) : (  
          <Typography variant="h4" component="h4" gutterBottom align="center" className={classes.custom}>
            You must have to Login
          </Typography>
        )}  
      </div>
    );
}

export default PeopleContainer;