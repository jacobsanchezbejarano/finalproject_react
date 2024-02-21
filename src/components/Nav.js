import { Link } from 'react-router-dom';
export default function Nav(props) {

    return (
        <nav>
            <ul id="primaryNav" className={props.activo ? 'open' : ''}>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservation" className="nav-item">Reservation</Link></li>
                <li><Link to="/order" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    )
}