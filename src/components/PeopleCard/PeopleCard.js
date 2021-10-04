import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constraints";

function PeopleCard({ user }) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + `/users/${user.id}/people`)
        .then((response) => response.json())
        .then((peopleData) => setPeople(peopleData));
    }, []);

    return (
        <div className="people-card">
            <h5>{people.first_name} </h5>
            <h5>{people.last_name} </h5>
        </div>
    );
}

export default PeopleCard;