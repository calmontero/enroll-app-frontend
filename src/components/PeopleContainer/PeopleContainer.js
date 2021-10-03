import React, { useState } from "react";
import { BASE_URL } from "../../constraints";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Error from "../../styles/Error";

function PeopleContainer({ user }) {
    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        state: '',
        city: '',
        phone: ''
    };
    const[people, setPeople] = useState(initialState);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch(BASE_URL + "/people", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(people),
        }).then((r) => {
          if (r.ok) {
            //r.json().then((user) => onLogin(user));
            //history.push('/');
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    function handleChange(e) {
        const updatedValue = {...people}
        updatedValue[e.target.name] = e.target.value
        setPeople(updatedValue)
    }

    return (
        <div className="publisher-form">
        <h2>Fill the form</h2>
        <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
              <Input 
              type="text"
              name="first_name"
              placeholder="Enter first name..."
              value={people.first_name}
              onChange={handleChange}
              />
              &nbsp;
              &nbsp;
              <Input
              type="text"
              name="last_name"
              placeholder="Enter last name..."
              value={people.last_name}
              onChange={handleChange}
              />
              &nbsp;
              &nbsp;
              <Input
              type="text"
              name="state"
              placeholder="state..."
              value={people.state}
              onChange={handleChange}
              />
              &nbsp;
              &nbsp;
              <Input
              type="text"
              name="city"
              placeholder="Enter city..."
              className="Input-text"
              value={people.city}
              onChange={handleChange}
              />
              &nbsp;
              &nbsp;
              <Input
              type="text"
              name="phone"
              placeholder="Enter phone..."
              className="Input-text"
              value={people.phone}
              onChange={handleChange}
              />
              <br />
              <Button type="submit"variant="outlined" color="secondary">Update</Button>
              <p className="forgot-password text-right">
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
              </p>          
          </form>
      </div>
    );
}

export default PeopleContainer;