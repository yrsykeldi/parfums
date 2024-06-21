import '../styles/ProductCards.css';
import ParfumMeadow from '../assets/cards/PARFUM-Meadow.jpg';
import { useNavigate } from 'react-router-dom';

function ProductCards({ theme }) {
    const navigate = useNavigate()

    const containerTextStyle = {
        color:  theme === 'dark' ? 'white' : 'black'
    };

    const buttonStyle = {
        backgroundColor: '#ABB249',
        color: theme === 'dark' ? 'black' : 'white'
    };

    return (
        <div style={{cursor: 'pointer'}} onClick={() => navigate('/detail')} className={`cards`} >
            <div className={`card-container__products`}>
                <div className={`card-container__products-imgs`}>
                    <img className={`card-container__products-img`} src={ParfumMeadow} alt="" />
                </div>
                <div className={`card-container__info`}>
                    <p className={`card-container__info-name`} style={containerTextStyle}>Meadow</p>
                    <p className={`card-container__info-uesr`} style={containerTextStyle}>BREEZY & JOYFUL</p>
                    <p className={`card-container__info-prise`} style={containerTextStyle}>$39.95</p>
                </div>
                <div className={`card-containe__buttun`}>
                    <button className={`card-containe__buttun-shop`} style={buttonStyle}>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCards;

