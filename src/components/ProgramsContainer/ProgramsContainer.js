import React, { useState, useEffect } from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from "../../constraints";

function ProgramsContainer() {
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
            <Typography variant="h2" component="h2" gutterBottom color= "primary" align="center">
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