import React, { useState } from "react";
//import { BASE_URL } from "../../constraints";
import PeopleForm from "../PeopleForm/PeopleForm";
import PeopleCard from "../PeopleCard/PeopleCard";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import EnrollForm from "../EnrollForm/EnrollForm";

const useStyles = makeStyles({
  custom: {
    color: "#F3E7E4",
    fontWeight: "bold"
  }
});

function PeopleContainer({ user }) {
  const classes = useStyles();
  const program_id = localStorage.getItem('program_id');
  console.log(user);

    return (
      <div className="people-container">
        {user ? (
          <div> 
            <PeopleForm user={user} />
            <PeopleCard user={user} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <EnrollForm id={program_id}  />
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