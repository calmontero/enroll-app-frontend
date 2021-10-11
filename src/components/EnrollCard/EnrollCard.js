import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./EnrollCard.css";

function EnrollCard({ enroll, onDeleteEnroll }) {
    const [programs, setPrograms] = useState([]);
    const [deleteProgram, setDeleteProgram] = useState(false);
    const now = enroll.progress;
    
    useEffect(() => {
        fetch(BASE_URL + `/programs/${enroll.program_id}`)
        .then((response) => response.json())
        .then((programData) => setPrograms(programData));
    }, []);

    function handleDelete(e) {
        if (now < 50) {
            setDeleteProgram(false);
            fetch(BASE_URL + `/enroll_studies/${enroll.id}`, {
                method: "DELETE",
            }).then((r) => {
                if (r.ok) {
                    onDeleteEnroll(enroll.id);
                }
            });
        } else {
            setDeleteProgram(true);
        }
    }

    return (
        <div className= "enroll-card" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
            <h6>Program: {programs.name} </h6>
            <p>Progress:</p>
            <ProgressBar now={now} label={`${now}%`} />
            <br />
            <Button type="submit"variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
            {deleteProgram ? <p>You can delete a program with equal or more 50% of progress</p> : null}
        </div>
    );
}

export default EnrollCard;