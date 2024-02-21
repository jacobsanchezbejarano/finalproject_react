import Icon from "./Icon"

export default function Card(props) {
    const data = {
        img: require("../assets/icon_delivery_t.png"),
        alt: "Icon delivery"
    };

    return (
        <article className="specials-card">
            <picture className="w-100">
                <img src={props.img} alt={props.name}/>
            </picture>
            <div className="specials-header">
                <h3>{props.name}</h3>
                <span className="highlight-font">$ {props.price}</span>
            </div>
            <p>{props.description}</p>
        
            <h3>Order a Delivery <Icon {...data}/></h3>
        
        </article>
    )
}