import React from 'react';
import Speciality from '../Speciality/Speciality';
import './Specialities.scss';
import { connect } from 'react-redux';

const Specialities = ({ specialities }) => {
    return (
        <div className="specialities">
            <div className="container">
                <h1 className="heading mb-5"><span className="special">Why</span> choose us</h1>
                <div className="row">
                    { 
                        specialities.map(item => <Speciality key={item.name} item={item}></Speciality>)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        specialities: state.home.specialities,
    }
}

export default connect(mapStateToProps)(Specialities);