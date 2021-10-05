import React, { useState, useEffect } from "react";
import "./PeopleCard.css";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';

function PeopleCard({ user }) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + `/users/${user.id}/people`)
        .then((response) => response.json())
        .then((peopleData) => setPeople(peopleData));
    }, []);

    return (
        <div className="people-card">
            <div className="flex-child-p magenta"  >
                <img
                    className="profile-img"
                    src={"https://bit.ly/2XrYtL7"}
                    alt={people.first_name}
                    onError={(event) => event.target.style.display = 'none'}
                    style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                />
            </div>
            <div className="flex-child1-p green">
                <h6>First name: {people.first_name} </h6>
                <h6>Last name: {people.last_name} </h6>
                <h6>Email: {people.email} </h6>
                <h6>State: {people.state} </h6>
                <h6>City: {people.city} </h6>
                <h6>Phone: {people.phone} </h6>
                <Button type="submit"variant="outlined" color="secondary">Update</Button>
            </div>
        </div>
    );
}

export default PeopleCard;