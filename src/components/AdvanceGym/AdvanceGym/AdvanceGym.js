import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Description from '../Description/Description';
import Schedule from '../Schedule/Schedule';
import './AdvanceGym.scss';

const AdvanceGym = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>this is AdvanceGym</h1>
            <Description></Description>
            <Schedule></Schedule>
            <Footer></Footer>
        </div>
    );
};

export default AdvanceGym;