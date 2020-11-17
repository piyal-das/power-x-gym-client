import React from 'react';
import './Program.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Program = ({ item }) => {
    const {name, image} = item;
    const history = useHistory();

    const handleClick = () => {
        history.push('/classes');
    }

    return (
        <div className="col-sm-12 col-md-6">
            <div className="program">
                <img className="img-fluid" src={image} alt=""/>
                <button onClick={handleClick} className="image-title">
                    {name} <FontAwesomeIcon className="program-icon" icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Program;