import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="">
                <ul className="container">
                    <li className="nav-items">Shop</li>
                    <li className="nav-items">Order Review</li>
                    <li className="nav-items">Manage Inventory Here</li>
                </ul>
            </nav>
        </>
    );
};

export default Header;