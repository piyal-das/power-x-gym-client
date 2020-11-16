import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import BankDetails from './BankDetails';


const Payment = (props) => {
    const stripePromise = loadStripe('sk_test_51Ho3ukGfajRRj5TtCLVjosU9g5ZVAh7tXynBO3SvbpfbgrqHyrUYymqE2MA2ATc0JZJs3FlE1FkmJK6uAfvEURtS00Jg07EOzM');
    return (
        <div className="payment">

            <div className="container">
                <div className="stripe row">
                    <Elements stripe={stripePromise}>
                        <BankDetails stepHandler={props.stepHandler} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;