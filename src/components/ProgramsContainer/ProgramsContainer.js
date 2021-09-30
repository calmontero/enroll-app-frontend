import React, { useState, useEffect } from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";
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
        <div className="programs-container">
            <h1>Programs</h1>
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