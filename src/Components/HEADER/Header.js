import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="nav-items">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/review">Order Review</Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/inventroy">Manage Inventory Here</Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/product">Manage Inventory Here</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;