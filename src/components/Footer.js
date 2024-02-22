import {Link} from 'react-router-dom';

export default function Footer() {
    const image = require("../assets/Logo.svg").default;
    const alt_val = "Little Lemon Logo";

    return (
        <footer>
            <div className="logo_footer"> {/* Cambio "class" por "className" */}
                <img src={image} alt={alt_val}/>
            </div>
            <div>
                <p>Navigation</p>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/menu" className="nav-item">Menu</Link></li>
                    <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order" className="nav-item">Order Online</Link></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </div>

            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div>
                <p>Social Media Links</p>
                <ul>
                    <li><Link to="/" className="nav-item">Media 1</Link></li>
                    <li><Link to="/" className="nav-item">Media 2</Link></li>
                    <li><Link to="/" className="nav-item">Media 3</Link></li>
                </ul>
            </div>
        </footer>
    )
}