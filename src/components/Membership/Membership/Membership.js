import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import MembershipMessage from '../MembershipMessage/MembershipMessage';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import StepIndicator from '../StepIndicator/StepIndicator';
import './Membership.scss';

const Membership = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <StepIndicator></StepIndicator>
            {
                id === 'personalDetails' ? <PersonalDetails></PersonalDetails>
                    : id === 'bankDetails' ? <ProcessPayment></ProcessPayment>
                    : id === 'message' ? <MembershipMessage></MembershipMessage>
                    : null
            }                
            <Footer></Footer>
        </div >
    );
};

export default Membership;