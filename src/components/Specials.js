import { Link } from 'react-router-dom';
import Button from "./Button"
import Card from "./Card"
export default function Specials() {

    const data = [
        {
            id: "1",
            img: require('../assets/greek_salad.jpg'),
            name: "Greek Salad",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garic and rosemary croutons.",
        },
        {
            id: "2",
            img: require('../assets/bruchetta.png'),
            name: "Bruchetta",
            price: 5.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.",
        },
        {
            id: "3",
            img: require('../assets/lemon_dessert.jpg'),
            name: "Lemon Dessert",
            price: 5.00,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ];

    return (
        <section className="specials-section">
            <div className="specials-title">
                <h2>This weeks specials</h2>
                <Link to="/menu"><Button classProp="btn-primary" name="Online Menu"/></Link>
            </div>
            <div className="specials-cards">
                {data.map((item) => <Card key={item.id} {...item} />)}
            </div>
        </section>
    )
}