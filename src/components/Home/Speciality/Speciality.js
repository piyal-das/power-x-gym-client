import React from 'react';
import './Speciality.scss';

const Speciality = ({ item }) => {
    const {name, icon} = item;

    return (
        <div className="col-sm-12 col-md-4">
            <div className="speciality">
                <div className="icon d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={icon} alt=""/>
                </div>
                <h3>{name}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, autem. Molestias culpa unde cupiditate quasi. A porro hic culpa necessitatibus!</p>
            </div>
        </div>
    );
};

export default Speciality;