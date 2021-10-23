import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Useauth from '../Hooks/UseAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { SigninGoogle } = Useauth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleSignin = () => {
        SigninGoogle()
            .then(result => {
                history.push(redirect_uri)

            })


    }


    return (
        <div className="Login-form">
            <div>
                <h4>Please Login</h4> <hr />
                <form onSubmit="">
                    <input type="text" placeholder="your email" />
                    <br />
                    <input type="passord" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>------or-------</p>
                <button onClick={handleSignin} className="btn-regular">Goole sign In</button>
                <p>Have no account? <Link to="/register">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;