import React from 'react';
import './StepIndecator.css'
const StepIndecator = ({current}) => {
    return (
            <div className="step-indecator container my-5">
                <div className="steps col-md-9 mx-auto">
                    <div className="d-flex justify-content-between">
                        <div className= {current === 1 ? "step active" : "step" } >
                            <div className="num">
                                1
                            </div>
                           
                            <h6>Personal Details</h6>
                        </div>
                        <div className= {current === 2 ? "step active" : "step" } >
                            <div className="num">
                                2
                            </div>
                           
                            <h6>Bank Payment</h6>
                        </div>
                        <div className= {current === 3 ? "step active" : "step" } >
                            <div className="num">
                                3
                            </div>
                           
                            <h6>Membership Created</h6>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default StepIndecator;