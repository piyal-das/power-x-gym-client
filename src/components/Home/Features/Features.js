import React from 'react';
import Feature from '../Feature/Feature';
import './Features.scss';
import { connect } from 'react-redux';

const Features = ({ featureList }) => {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    {
                        featureList.map(item => <Feature key={item.name} item={item}></Feature>)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        featureList: state.home.featureList,
    }
}

export default connect(mapStateToProps)(Features);