import React, { useState, useEffect } from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from "../../constraints";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    custom: {
      color: "#F3E7E4",
      fontWeight: "bold"
    }
  });

function ProgramsContainer() {
    const classes = useStyles();
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "/programs", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            })
        .then((response) => response.json())
        .then((programsData) => setPrograms(programsData));
    }, []);
      
      return (
        <div className="programs-container" >
            <Typography variant="h2" component="h2" gutterBottom className={classes.custom} align="center">
                Programs
            </Typography>
            {
                programs && programs.length > 0 && programs.map(p => {
                    return <ProgramsCard
                            key={p.id}
                            programs={p}
                            />
                })
             }
        </div>
      )
}

export default ProgramsContainer;