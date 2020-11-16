import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import BankDetails from './BankDetails';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Payment = (props) => {
    const stripePromise = loadStripe('pk_test_51Ho3ukGfajRRj5TttM2dy00d5hgPhiMLMr9kgXlCM1mbEFG6xFvonpR7xYc2uBS1ZudZtNmhnVFBIBTW4psOF0te00vPI2a8pB');
    return (
        <div className="payment">
        
            <div className="container">
                <div className="stripe row">
                <Elements stripe={stripePromise}>
                  <BankDetails stepHandler={props.stepHandler}/>
                       </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;