import {Link} from 'react-router-dom';
export default function Nav(props) {

    return (
        <nav>
            <ul id="primaryNav" className={props.activo ? 'open' : ''}>
                <li><Link to="/" activeClassName="selected" className="nav-item">Home</Link></li>
                <li><Link to="/about" activeClassName="selected" className="nav-item">About</Link></li>
                <li><Link to="/menu" activeClassName="selected" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" activeClassName="selected" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" activeClassName="selected" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" activeClassName="selected" className="nav-item">Login</Link></li>
            </ul>
        </nav>
    )
}