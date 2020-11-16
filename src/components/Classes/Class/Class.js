import React, { useContext } from 'react';
import './Class.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { GymContext } from '../../../App';

const Class = ({ gymClass }) => {
    const { name, image } = gymClass;
    const { setGymDetails } = useContext(GymContext);
    const history = useHistory();

    const handleClick = () => {
        setGymDetails(gymClass);
        history.push('/advanceGym');
    }

    return (
        <div className="col-sm-6 col-md-4">
            <div className="gymClass">
                <img className="w-100 gymClass-img" src={image} alt="" />
                <button onClick={handleClick} className="gymClass-title">
                    {name}
                    <FontAwesomeIcon icon={faArrowRight} className="gymClass-icon"/>
                </button>
            </div>
        </div>
    );
};

export default Class;