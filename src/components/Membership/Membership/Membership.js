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
import { addUserDetail } from '../../../redux/actions/membershipActions';
import { connect } from 'react-redux';

const Membership = ({addUserDetail}) => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <StepIndicator></StepIndicator>
            {
                id === 'personalDetails' ? <PersonalDetails addUserDetail={addUserDetail}></PersonalDetails>
                    : id === 'bankDetails' ? <ProcessPayment></ProcessPayment>
                    : id === 'message' ? <MembershipMessage></MembershipMessage>
                    : null
            }                
            <Footer></Footer>
        </div >
    );
};

const mapDispatchToProps = {
    addUserDetail: addUserDetail
}

export default connect(null, mapDispatchToProps)(Membership);