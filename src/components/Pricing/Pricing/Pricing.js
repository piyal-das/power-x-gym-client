import React, { useEffect } from 'react';
import { fetchPricingPlan } from '../../../redux/actions/pricingPlanActions';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PricingCard from '../PricingCard/PricingCard';
import './Pricing.scss';
import {connect} from 'react-redux';

const Pricing = ({ pricingList, fetchPricingPlan }) => {
    useEffect(() => {
        fetchPricingPlan();
    }, []);

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="text-center w-100 mb-3">
                        <h1 className="pricing-title"><span className="special">Choose the offer</span> that suits you</h1>
                        <p style={{ width: '500px', margin: '0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus temporibus aliquid veritatis iusto fuga porro.</p>
                    </div>
                    {
                        pricingList.map(item => {
                            return (
                                <div className="col-sm-12 col-md-4">
                                    <PricingCard key={item._id} item={item}></PricingCard>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pricingList: state.pricing.pricingPlan,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchPricingPlan: () => dispatch(fetchPricingPlan()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);