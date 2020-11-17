import React from 'react';
import { connect } from 'react-redux';
import './MembershipMessage.scss';

const MembershipMessage = ({ userDetail, bankDetail, gymDetail, pricingPlan }) => {
    console.log(userDetail, bankDetail);

    return (
        <div className="text-center">
            <h1 className="heading">Welcome To <span style={{ color: '#171426' }}>power</span> <span className="special">X</span> gym</h1>
            { userDetail !== {} ? <h2 className="text-center">Hi, {userDetail.firstName} {userDetail.lastName}</h2> : '' }
            <h5 style={{ color: 'green' }} className="text-center">
    Your Payment is Successful & subscription add for <span style={{ color: '#444' }}>{gymDetail.name} &amp; {pricingPlan.name} (${pricingPlan.price})</span>
            </h5>
            { bankDetail !== {} 
                ? <h5 className="text-center">Keep your payment id <span className="special">{bankDetail.id}</span> for your future reference</h5> 
                : ''
            }
            <p>Doing Exercise everyday keep you mentally and physically strong</p>
            <h5 className="heading">Take Care</h5>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userDetail: state.membership.userDetail,
        bankDetail: state.membership.bankDetail,
        gymDetail: state.gymDetail.gymDetails,
        pricingPlan: state.pricing.addedPricingPlan
    }
}

export default connect(mapStateToProps, null)(MembershipMessage);