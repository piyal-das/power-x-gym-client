import React from 'react';
import './Day.scss';

const Day = ({ item }) => {
    const {day, time} = item;

    return (
        <div className="col-md-6 item-container">
            <h4>{day}</h4>
            <p className="special">{time}</p>
        </div>
    );
};

export default Day;