import React, { useState } from "react";
import "./PeopleCard.css";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';
import Error from "../../styles/Error";
import TextField, { Input, InputLabel } from "@material-ui/core";

function PeopleCard({ people, setPeople, user }) {
    const [errors, setErrors] = useState([]);
    
    function handleChange(e) {
        const updatedValue = {...people}
        updatedValue[e.target.name] = e.target.value
        setPeople(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(BASE_URL + `/users/${user.id}/people/${people.id}`, {
            method: "PATCH",
            body: JSON.stringify(people),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            }.then((r) => {
                if (r.ok) {
                    
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
              })
        });
    }
    
    return (
        <div className="main" >
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
                <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
                    
                    <InputLabel>First name:</InputLabel>
                    <Input type="text" name="first_name" placeholder={people.first_name} value={people.first_name} onChange={handleChange}/>
                    <InputLabel>Last name:</InputLabel>
                    <Input type="text" name="last_name" placeholder={people.last_name} value={people.last_name} onChange={handleChange}/>
                    <InputLabel>Email:</InputLabel>
                    <Input type="text" name="email" placeholder={people.email} value={people.email} onChange={handleChange} />
                    <InputLabel>State:</InputLabel>
                    <Input type="text" name="state" placeholder={people.state} value={people.state} onChange={handleChange}   />
                    <InputLabel>City: </InputLabel>
                    <Input type="text" name="city" placeholder={people.city} value={people.city} onChange={handleChange}  />
                    <InputLabel>Phone:</InputLabel>
                    <Input type="text" name="phone" placeholder={people.phone} value={people.phone} onChange={handleChange} />
                    <Button type="submit"variant="outlined" color="secondary" >Update</Button>
                    <p className="forgot-password text-right">
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </p>  
                </form>
                    
                </div>
            </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    );
}

export default PeopleCard;