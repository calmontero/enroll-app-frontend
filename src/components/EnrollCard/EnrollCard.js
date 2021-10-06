import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';

function EnrollCard({ enroll, onDeleteEnroll }) {
    const [programs, setPrograms] = useState([]);
    
    useEffect(() => {
        fetch(BASE_URL + `/programs/${enroll.program_id}`)
        .then((response) => response.json())
        .then((programData) => setPrograms(programData));
    }, []);

    function handleDelete(e) {
        fetch(BASE_URL + `/enroll_studies/${enroll.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteEnroll(enroll.id);
            }
          });
    }

    return (
        <div className= "enroll-card">
            
            <h6>Program: {programs.name} </h6>
            <Button type="submit"variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
        </div>
    );
}

export default EnrollCard;