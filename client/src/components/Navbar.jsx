import React, { useContext } from 'react'
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {
    const navigate = useNavigate();
    const usertype = localStorage.getItem('userType');
    const { logout } = useContext(GeneralContext);

    const customerNavItems = [
        { label: 'Home', path: '/home' },
        { label: 'Deposits', path: '/deposits' },
        { label: 'Loans', path: '/loans' },
        { label: 'Transactions', path: '/transactions' }
    ];

    const adminNavItems = [
        { label: 'Home', path: '/admin' },
        { label: 'Users', path: '/all-users' },
        { label: 'Deposits', path: '/all-deposits' },
        { label: 'Loans', path: '/all-loans' },
        { label: 'Transactions', path: '/all-transactions' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        logout();
    };

    if (!usertype) {
        return null;
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3 className="brand-title">
                    {usertype === 'admin' ? 'SB Bank (Admin)' : 'SB Bank'}
                </h3>
            </div>

            <div className="nav-options">
                {(usertype === 'customer' ? customerNavItems : adminNavItems).map((item, index) => (
                    <button
                        key={index}
                        className="nav-item"
                        onClick={() => handleNavigation(item.path)}
                    >
                        {item.label}
                    </button>
                ))}
                
                <button
                    className="nav-item logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;