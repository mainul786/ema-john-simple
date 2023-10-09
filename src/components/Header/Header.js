import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        
            <nav className="header">
                <img src={logo} alt="" className="img" />
                <div>
                    <a href="#Home">Home</a>
                    <a href="#Shops">Shops</a>
                    <a href="#Inventor">Inventor</a>
                    <a href="#Login">Login</a>
                </div>
            </nav>
       
    );
};

export default Header;