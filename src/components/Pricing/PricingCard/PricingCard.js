import React from 'react';
import './PricingCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const PricingCard = ({ item }) => {
    const { name, image, price, benefits } = item;
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const history = useHistory();

    const handleClick = () => {
        history.push('/membership/personalDetails');
    }

    return (
        <div style={backgroundStyle} className="pricingCard text-center">
            <div className="overlay"></div>
            <div className="content">
                <div className="pricing-header">
                    <h4 className="special">BILLED MONTHLY</h4>
                    <h1>{name}</h1>
                    <h2 className="special">${price}</h2>
                </div>
                <ul>
                    {
                        benefits.map(item => <li key={item}><FontAwesomeIcon icon={faCheck} className="mr-1" />  {item}</li>)
                    }
                </ul>
                <button onClick={handleClick} className="main-btn">Purchase</button>
            </div>
        </div>
    );
};

export default PricingCard;