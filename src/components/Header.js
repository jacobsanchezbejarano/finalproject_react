import Nav from "./Nav";

export default function Header() {
    const image = require("../assets/Logo.svg").default;
    const alt_val = "Little Lemon Logo";
    return (
        <header>
            <img src={image} alt={alt_val}/>
            <Nav/>
        </header>
    )
}