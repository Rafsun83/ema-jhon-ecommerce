import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Register = () => {
    return (
        <div className="Login-form">
            <div>
                <h4>Create new account</h4>
                <form onSubmit="">
                    <input type="text" placeholder="your email" />
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <input type="password" placeholder="re-password" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>----------or--------</p>
                <button className="btn-regular">Signin with google</button>
                <p>i have already account? <Link to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;