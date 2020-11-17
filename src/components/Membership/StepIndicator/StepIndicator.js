import React from 'react';
import { useParams } from 'react-router-dom';
import './StepIndicator.scss';

const StepIndicator = () => {
    const {id} = useParams();

    return (
        <div className="stepIndicator">
            <div className="stepIndicator-container d-flex justify-content-between align-items-center">
                <div className="circle" 
                style={{ backgroundColor: `${id === 'personalDetails' || id === 'bankDetails' || id === 'message' ? '#FCD842' : 'rgb(209, 209, 209)' }`}}>
                    <p>1</p>
                </div>
                <div className="circle" 
                style={{ backgroundColor: `${id === 'bankDetails' || id === 'message' ? '#FCD842' : 'rgb(209, 209, 209)' }`}}>
                    <p>2</p>
                </div>
                <div className="circle" 
                style={{ backgroundColor: `${id === 'message' ? '#FCD842' : 'rgb(209, 209, 209)' }`}}>
                    <p>3</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default StepIndicator;