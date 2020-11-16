import React from 'react';
import Feature from '../Feature/Feature';
import './Features.scss';

const Features = () => {
    const featureList = [
        { name: 'Progression', icon: 'https://i.imgur.com/B89vhIe.png', image: 'https://i.imgur.com/HE6Yvkj.jpg' },
        { name: 'workout', icon: 'https://i.imgur.com/Aw9gvet.png', image: 'https://i.imgur.com/5OYyj6v.jpg' },
        { name: 'nutrition', icon: 'https://i.imgur.com/PZzTx08.png', image: 'https://i.imgur.com/MxBlwlg.jpg' },
    ];

    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    {
                        featureList.map(item => <Feature key={item.name} item={item}></Feature>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;