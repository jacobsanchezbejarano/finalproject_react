import Nav from "./Nav";
export default function Header() {
    const logo = require("../assets/Logo.svg").default;
    const alt_value = "Little lemon logo";
    return (
      <header>
        <img src={logo} alt={alt_value}/>
        <Nav/>
      </header>  
    );
}