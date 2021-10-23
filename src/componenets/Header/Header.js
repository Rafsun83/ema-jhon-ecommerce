import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import './Header.css';

import Useauth from '../Hooks/UseAuth';

const Header = () => {
    const { user, Logout } = Useauth();
    return (
        <div className="Header" >
            <img className="emajhon-logo" src={logo} alt="" />
            <div className="header_search">



                <nav className="headernav">
                    <NavLink to="/">Shop</NavLink>
                    <NavLink to="/order">Order Review</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <span>{user.displayName} </span>
                    {user.email ?

                        <button onClick={Logout}>LogOut</button> :


                        <NavLink to="/login">Login</NavLink>
                    }


                </nav>

            </div>
        </div>
    )
}

export default Header
