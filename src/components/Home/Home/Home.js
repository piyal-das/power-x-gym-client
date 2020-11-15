import React from 'react';
import About from '../About/About';
import Programs from '../Programs/Programs';
import './Home.scss';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Specialities from '../Specialities/Specialities';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            <h1>this is Home</h1>
            <Header></Header>
            <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <Programs></Programs>
            <Specialities></Specialities>
            <Footer></Footer>
        </div>
    );
};

export default Home;