import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Payment from '../BankDetails/Payment';
import MembershipMessage from '../MembershipMessage/MembershipMessage';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import StepIndecator from '../StepIndecator/StepIndecator';
import './Membership.scss';

const Membership = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <StepIndecator></StepIndecator>
            <PersonalDetails></PersonalDetails>
            <Payment></Payment>
            <MembershipMessage></MembershipMessage>
            <Footer></Footer>
        </div>
    );
};

export default Membership;