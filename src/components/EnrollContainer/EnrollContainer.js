import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";
import EnrollCard from "../EnrollCard/EnrollCard";
import EnrollForm from "../EnrollForm/EnrollForm";

function EnrollContainer({ program, people, user }) {
    const[enrolls, setEnrolls] = useState([]);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        fetch(BASE_URL + `/users/${user.id}/people/1`)
        .then((response) => response.json())
        .then((peopleData) => setEnrolls(peopleData.enroll_studies));
    }, []);

    function handleDelete(id) {
        const enrollsFilter = enrolls.filter((e) => e.id !== id);
        setEnrolls(enrollsFilter);
    }

    return (
        <div className="enroll-container" >
            {program.programId ? <EnrollForm people={people} program={program} /> : null}
            <h5>Programs enrolled</h5>
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