import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import EnrollCard from "../EnrollCard/EnrollCard";
import EnrollForm from "../EnrollForm/EnrollForm";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    custom: {
      color: "#F3E7E4",
      fontWeight: "bold"
    }
  });

function EnrollContainer({ program, people, user }) {
    const classes = useStyles();
    const[enrolls, setEnrolls] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + `/users/${user.id}/people/${people.id}`)
        .then((response) => response.json())
        .then((peopleData) => setEnrolls(peopleData.enroll_studies));
    }, []);

    function handleDelete(id) {
        const enrollsFilter = enrolls.filter((e) => e.id !== id);
        setEnrolls(enrollsFilter);
    }

    function handleAddEnroll(newEnroll) {
        program.programId = null;
        const updatedEnrolls = [...enrolls, newEnroll];
        setEnrolls(updatedEnrolls);
        localStorage.clear();
    }

    return (
        <div className="enroll-container" >
            {program.programId ? <EnrollForm people={people} program={program} onAddEnroll={handleAddEnroll} /> : null}
            <Typography variant="h5" className={classes.custom} >
                Programs enrolled
            </Typography>
            <br />
            {
                enrolls && enrolls.map(e => {
                    return < EnrollCard 
                          key={e.id} 
                          enroll={e}
                          onDeleteEnroll={handleDelete}
                          />
                })
            }
        </div>
    );
}

export default EnrollContainer;