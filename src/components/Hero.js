import Button from './Button';
export default function Hero() {
    const image = require('../assets/restauranfood.jpg');
    const img_alt = "Server showing a dish";
    return (
        <article className="hero">
            <div className="container-1">
                <h1 className="main-title">Little Lemon</h1>
                <h2 className="main-subheading">Chicago</h2>
                <p className="hero-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button classProp="btn-primary" name="Reserve a Table"/>
            </div>
            <div className="container-2">
                <picture className='hero-picture'>
                    <img src={image} alt={img_alt}/>
                </picture>
            </div>
        </article>
    )
}