import React from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Description from '../Description/Description';
import Schedule from '../Schedule/Schedule';
import './AdvanceGym.scss';
import { connect } from 'react-redux';

const AdvanceGym = ({ gymDetails }) => {
    const {image, schedule, benefits} = gymDetails;
    const history = useHistory();

    const handleClick = () => {
        history.push('/pricing');
    }

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container advanceGym">
                <div className="row">
                    <div className="col-md-7">
                        <Description image={image} benefits={benefits}></Description>
                    </div>
                    <div className="col-md-5">
                        <Schedule schedule={schedule}></Schedule>
                    </div>
                </div>
                <button onClick={handleClick} className="main-btn schedule-btn">Join us</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        gymDetails: state.gymDetail.gymDetails
    }
}

export default connect(mapStateToProps)(AdvanceGym);