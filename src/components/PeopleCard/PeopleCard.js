import React, { useState } from "react";
import "./PeopleCard.css";
import { BASE_URL } from "../../constraints";
import Button from '@material-ui/core/Button';
import Error from "../../styles/Error";
import { Input, InputLabel } from "@material-ui/core";
import validator from 'validator';

function PeopleCard({ people, user, onUpdatePeople }) {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState(people.first_name);
    const [lastName, setLastName] = useState(people.last_name);
    const [email, setEmail] = useState(people.email);
    const [phone, setPhone] = useState(people.phone);
    const [state, setState] = useState(people.state);
    const [city, setCity] = useState(people.city);
    const [emailError, setEmailError] = useState('');

    function validateEmail(e) {
        setEmail(e.target.value);
        if (validator.isEmail(email)) {
            setEmailError('');
        } else {
            setEmailError('Enter valid Email!');
        }
    }

    const handleInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");

        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`;
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(BASE_URL + `/users/${user.id}/people/${people.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                state: state,
                city: city,
                phone: phone, 
            }),
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((peopleData) => onUpdatePeople(peopleData));
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
              })
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
                    <Input type="text" name="first_name"  placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <InputLabel>Last name:</InputLabel>
                    <Input type="text" name="last_name" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <InputLabel>Email:</InputLabel>
                    <Input type="text" name="email" placeholder="Email" value={email} onChange={validateEmail} />
                    <br />
                    <span style={{fontWeight: 'bold', color: 'red', }}>{emailError}</span>
                    <InputLabel>State:</InputLabel>
                    <Input type="text" name="state" placeholder="State" value={state} onChange={(e) => setState(e.target.value)}   />
                    <InputLabel>City: </InputLabel>
                    <Input type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}  />
                    <InputLabel>Phone:</InputLabel>
                    <Input type="text" name="phone" placeholder="Phone" value={phone} onChange={(e) => handleInput(e)} />
                    <br />
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