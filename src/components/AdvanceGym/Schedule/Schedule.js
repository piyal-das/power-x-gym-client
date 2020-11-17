import React from 'react';
import Day from '../Day/Day';
import './Schedule.scss';

const Schedule = ({ schedule }) => {
    return (
        <div className="schedule">
            <h1 className="schedule-title mb-4 ml-2"><span className="special">Class</span> Schedule</h1>
            <div className="row ml-1">
            {
                schedule.map(item => <Day key={item} item={item}></Day>)
            }
            </div>
        </div>
    );
};

export default Schedule;