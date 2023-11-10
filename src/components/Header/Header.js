import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error));
    }

    return (

        <nav className="header">
            <img src={logo} alt="" className="img" />
            <div>
                <Link to="/">Shop</Link>
                <Link to='/orders' >Order</Link>
                <Link to='/shipping'>Shipping</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {user?.uid ? 
                <button onClick={handleLogOut}>LogOut</button>
                :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signUp'>SignUp</Link>
                    </>
                }
            </div>
        </nav>

    );
};

export default Header;