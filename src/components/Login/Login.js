import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from "../../constraints";
import Error from "../../styles/Error";
import "../../styles/index.css";
import { Form } from "react-advanced-form";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    localStorage.clear();
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch(BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => onLogin(user));
            history.push('/');
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form  >
                    <h3>Sign In</h3>
                    
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Enter username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
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
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >{isLoading ? "Loading..." : "Submit"}</button>
                    <p className="forgot-password text-right">
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                    </p>
                </Form>
            </div>
        </div>
    );
}

export default Login;