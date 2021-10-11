import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from "../../constraints";
import Error from "../../styles/Error";
import "../../styles/index.css";
//import { Form } from "react-advanced-form";

function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch(BASE_URL + "/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => createPeople(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    function createPeople(user) {
      setErrors([]);
      fetch(BASE_URL + `/users/${user.id}/people`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          user_id: user.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((people) => onLogin(user));
          history.push('/');
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner"> 
                <form >
                    <h3>Sign Up</h3>
                    
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Username"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="First name"
                            id="firstName"
                            autoComplete="off"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Last name"
                            id="lastName"
                            autoComplete="off"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >{isLoading ? "Loading..." : "Sign Up"}</button>
                    <h6>* All fields must be filled</h6>
                    <p className="forgot-password text-right">
                        {errors && errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </p>
                </form>
            </div>
        </div>
    );
}
export default SignUp;