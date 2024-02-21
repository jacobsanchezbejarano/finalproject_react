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
                    <li><a href={""}>Home</a></li>
                    <li><a href={""}>About</a></li>
                    <li><a href={""}>Menu</a></li>
                    <li><a href={""}>Reservation</a></li>
                    <li><a href={""}>Order Online</a></li>
                    <li><a href={""}>Login</a></li>
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
                    <li><a href={""}>Media 1</a></li>
                    <li><a href={""}>Media 2</a></li>
                    <li><a href={""}>Media 3</a></li>
                </ul>
            </div>
        </footer>
    )
}