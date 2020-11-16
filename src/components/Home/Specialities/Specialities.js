import React from 'react';
import Speciality from '../Speciality/Speciality';
import './Specialities.scss';

const Specialities = () => {
    const specialities = [
        {name: 'free fitness training', icon: 'https://i.imgur.com/TLldmDg.png',},
        {name: 'tons of cardio and strength', icon: 'https://i.imgur.com/Ev2EhsF.png',},
        {name: 'no commitment memberships', icon: 'https://i.imgur.com/ldjFmd1.png',},
    ];

    return (
        <div className="specialities">
            <div className="container">
                <h1 className="heading mb-5"><span className="special">Why</span> choose us</h1>
                <div className="row">
                    { 
                        specialities.map(item => <Speciality key={item.name} item={item}></Speciality>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Specialities;