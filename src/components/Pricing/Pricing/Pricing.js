import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PricingCard from '../PricingCard/PricingCard';
import './Pricing.scss';

const Pricing = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>this is pricing</h1>
            <PricingCard></PricingCard>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;