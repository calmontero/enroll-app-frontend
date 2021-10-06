import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function EnrollCard({ enroll, onDeleteEnroll }) {
    const [programs, setPrograms] = useState([]);
    const now = enroll.progress;
    
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
        <div className= "enroll-card" style={{width: "35%"}}>
            <h6>Program: {programs.name} </h6>
            <p>Progress:</p>
            <ProgressBar now={now} label={`${now}%`} />
            <Button type="submit"variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
            <br />
            <br />
        </div>
    );
}

export default EnrollCard;