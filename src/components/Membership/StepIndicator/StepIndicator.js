import React from 'react';
import './StepIndicator.scss';

const StepIndicator = () => {
    return (
        <div className="stepIndicator">
            <div className="stepIndicator-container d-flex justify-content-between align-items-center">
                <div className="circle"><p>1</p></div>
                <div className="circle"><p>2</p></div>
                <div className="circle"><p>3</p></div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default StepIndicator;