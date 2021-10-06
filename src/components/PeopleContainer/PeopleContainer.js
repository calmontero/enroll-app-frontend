import React, { useState } from "react";
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

function PeopleContainer({ user, people, onUpdatePeople }) {
  const classes = useStyles();
  const [program, setProgram] = useState({
    programId: localStorage.getItem('program_id'),
    programName: localStorage.getItem('name')
  }) ;

    return (
      <div className="people-container">
        {user ? (
          <div> 
            {people ? <PeopleCard people={people}  user={user} onUpdatePeople={onUpdatePeople} /> : null}
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