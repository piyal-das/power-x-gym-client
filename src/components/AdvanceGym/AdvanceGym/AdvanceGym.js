import React, { useContext } from 'react';
import { GymContext } from '../../../App';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Description from '../Description/Description';
import Schedule from '../Schedule/Schedule';
import './AdvanceGym.scss';

const AdvanceGym = () => {
    const {gymDetails, setGymDetails} = useContext(GymContext);
    const {image, schedule, benefits} = gymDetails;

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
                <button className="main-btn schedule-btn">Join us</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdvanceGym;