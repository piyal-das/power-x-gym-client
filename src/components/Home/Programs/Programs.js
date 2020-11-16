import React from 'react';
import Program from '../Program/Program';
import './Programs.scss';

const Programs = () => {
    const programs = [
        { name: 'yoga training session', image: 'https://i.imgur.com/glzHzi6.png' },
        { name: 'cardio training session', image: 'https://i.imgur.com/b7EKjNU.jpg' },
    ];
    return (
        <div className="programs">
            <div className="container">
                <h1 className="heading mb-5">Training <span className="special">Programs</span></h1>
                <div className="row">
                    { 
                        programs.map(item => <Program key={item.name} item={item}></Program>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Programs;