import { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from "./Nav";

export default function Header() {
    const image = require("../assets/Logo.svg").default;
    const alt_val = "Little Lemon Logo";

    const [activo, setActivo] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);


    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
        setActivo(!menuAbierto);
    };

    return (
        <header>
            <Link exact="true" to="/">
                <div className="first">
                    <img src={image} alt={alt_val}/>
                </div>
            </Link>
            <div>
                <button id="hamburguerBtn" onClick={toggleMenu}>
                    <span>{menuAbierto ? 'X' : '\u2630'}</span>
                </button>
            </div>
            <div className="menu">
                <Nav activo={activo}/> 
            </div>
        </header>
    );
}