import React from 'react';
import About from '../About/About';
import Programs from '../Programs/Programs';
import './Home.scss';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Specialities from '../Specialities/Specialities';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Programs></Programs>
            <Specialities></Specialities>
            <Footer></Footer>
        </div>
    );
};

export default Home;