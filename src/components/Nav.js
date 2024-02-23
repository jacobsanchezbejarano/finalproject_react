import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav(props) {
    const { pathname } = useLocation();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    return (
        <nav>
            <ul id="primaryNav" className={props.activo ? 'open' : ''}>
                <li><Link to="/" className={`nav-item ${currentPath === '/' ? 'selected' : ''}`}>Home</Link></li>
                <li><Link to="/about" className={`nav-item ${currentPath === '/about' ? 'selected' : ''}`}>About</Link></li>
                <li><Link to="/menu" className={`nav-item ${currentPath === '/menu' ? 'selected' : ''}`}>Menu</Link></li>
                <li><Link to="/reservations" className={`nav-item ${currentPath === '/reservations' ? 'selected' : ''}`}>Reservations</Link></li>
                <li><Link to="/order" className={`nav-item ${currentPath === '/order' ? 'selected' : ''}`}>Order Online</Link></li>
                <li><Link to="/login" className={`nav-item ${currentPath === '/login' ? 'selected' : ''}`}>Login</Link></li>
            </ul>
        </nav>
    )
}