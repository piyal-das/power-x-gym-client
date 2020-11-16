import React from 'react';
import './Class.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { addClassDetail } from '../../../redux/actions/gymDetailActions';
import { connect } from 'react-redux';

const Class = ({ gymClass, addClassDetail }) => {
    const { name, image } = gymClass;
    const history = useHistory();

    const handleClick = () => {
        addClassDetail(gymClass);
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

const mapDispatchToProps = {
    addClassDetail: addClassDetail,
}

export default connect(null, mapDispatchToProps)(Class);