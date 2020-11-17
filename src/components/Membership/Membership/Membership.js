import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import BankDetails from '../BankDetails/BankDetails';
import MembershipMessage from '../MembershipMessage/MembershipMessage';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import StepIndicator from '../StepIndicator/StepIndicator';
import './Membership.scss';

const Membership = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <StepIndicator></StepIndicator>
            <PersonalDetails></PersonalDetails>
            <BankDetails></BankDetails>
            <MembershipMessage></MembershipMessage>
            <Footer></Footer>
        </div>
    );
};

export default Membership;