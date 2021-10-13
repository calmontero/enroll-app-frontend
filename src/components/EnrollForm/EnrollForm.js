import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';
import Error from "../../styles/Error";
import "./EnrollForm.css";

function EnrollForm({ program, people, onAddEnroll }) {
    const [errors, setErrors] = useState([]);
    const [validEnroll, setValidEnroll] = useState(false);
    const progress = Math.floor(Math.random() * 100) + 1 ;

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch(BASE_URL + "/enroll_studies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            progress: progress,
            program_id: program.programId,
            person_id: people.id
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((newEnroll) => onAddEnroll(newEnroll));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return (
        <div className="enroll-form" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}} >
            <h6>Program selected: {program.programName} </h6>
            <Button type="submit"variant="outlined" color="secondary" onClick={handleSubmit}>Enroll</Button>
            <p className="forgot-password text-right">
                        {errors && errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
              </p>   
        </div>
    );
}

export default EnrollForm;