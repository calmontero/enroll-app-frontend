import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';

function EnrollForm({ id }) {

    const initialState = {
        progress: 0,
        program_id: id,
        person_id: 0
    };
    const [programs, setPrograms] = useState([]);
    const [enroll, setEnroll] = useState([initialState]);
   
    useEffect(() => {
        fetch(BASE_URL + `/programs/${id}`)
        .then((response) => response.json())
        .then((programData) => setPrograms(programData));
    }, []);

    function handleSubmit(e) {
        
    }

    return (
        <div className="enroll-container" >
            <h5>Program: {programs.name} </h5>

            <Button type="submit"variant="outlined" color="secondary" onClick={handleSubmit}>Enroll</Button>
        </div>
    );
}

export default EnrollForm;