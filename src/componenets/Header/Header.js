import React from 'react'
import logo from "../../images/logo.png";
import './Header.css';

const Header = () => {
    return (
        <div className="Header" >
            <img className="emajhon-logo" src={logo} alt="" />

            <nav className="headernav">
                <a href=""> Shop</a>
                <a href=""> Order Rivew</a>
                <a href=""> Inventory</a>
                <a href=""> Management</a>
            </nav>
        </div>
    )
}

export default Header
