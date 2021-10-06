import React, { useEffect } from "react";
import { BASE_URL } from "../../constraints";

function Header({ user, onSelectPeople }) {
    useEffect(() => {
        fetch(BASE_URL + `/users/${user.id}/people`)
        .then((response) => response.json())
        .then((peopleData) => onSelectPeople(peopleData));
    }, []);

    return (
        <header>
            {user ? (
            <div>
                <p>Welcome {user.username}</p>
            </div>
            ) : (
            <p>Press click in Login</p>
            )}
        </header>
    );
}

export default Header;