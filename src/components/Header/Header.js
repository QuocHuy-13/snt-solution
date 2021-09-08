import React from 'react';
import './Header.css';
import { auth } from '../../firebase/Config';
import { useHistory } from 'react-router';

const Header = () => {

    const history = useHistory();

    const handleLogOut = () => {
        auth
        .signOut()
        .then(() => {
            localStorage.removeItem('user');
            history.replace('/');
        })
    }

    return (
        <div className="header">
            <nav>
                <h2>Cat Breeds</h2>
                <button onClick={handleLogOut}>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    Logout
                </button>
            </nav>
        </div>
    );
}

export default Header;
