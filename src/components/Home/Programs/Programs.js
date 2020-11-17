import React from 'react';
import Program from '../Program/Program';
import './Programs.scss';
import {connect} from 'react-redux';

const Programs = ({ programs }) => {
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

const mapStateToProps = (state) => {
    return {
        programs: state.home.programs,
    }
}

export default connect(mapStateToProps)(Programs);