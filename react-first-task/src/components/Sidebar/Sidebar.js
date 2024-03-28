// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
