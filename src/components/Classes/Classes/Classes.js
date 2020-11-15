import React from 'react';
import Class from '../Class/Class';
import './Classes.scss';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Classes = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>this is Classes</h1>
            <Class></Class>
            <Footer></Footer>
        </div>
    );
};

export default Classes;