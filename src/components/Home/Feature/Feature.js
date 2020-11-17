import React from 'react';
import './Feature.scss';

const Feature = ({ item }) => {
    const { name, icon, image } = item;
    const bgStyle = { 
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div className="col-sm-12 col-md-4">
            <div style={bgStyle} className="feature text-center">
                <div className="overlay"></div>
                <div className="image-special d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={icon} alt=""/>
                </div>
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptate vitae architecto, aut iure perferendis.</p>
            </div>
        </div>
    );
};

export default Feature;