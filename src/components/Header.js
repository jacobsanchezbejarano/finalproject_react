import { useState } from "react";
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
            <div className="first"> {/* Cambio "class" por "className" */}
                <img src={image} alt={alt_val}/>
            </div>
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