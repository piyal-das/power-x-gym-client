import React from 'react';
import './BankDetails.scss';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BankDetails = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cardNumberElement = elements.getElement(CardNumberElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumberElement,
        });

        if (!stripe || !elements) {
            return;
        }

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod);
            history.push(`/membership/message`);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="credit-card-body">
                    <div className="d-flex justify-content-between">
                        <div className="credit-card-text">
                            <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod" value="creditCard" checked />
                            <h3>Credit Card</h3>
                            <p>Safe money transfer using your bank account. Visa, Maestro, Discover,American Express</p>
                        </div>
                        <div className="payment-img">
                            <img className="mr-2" src='https://i.imgur.com/D2QX32D.png' alt="" />
                            <img className="mr-2" src='https://i.imgur.com/S0tonqa.png' alt="" />
                            <img className="mr-2" src='https://i.imgur.com/U1sdpp8.png' alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="cardNumber">Card Number</label>
                                <CardNumberElement className="form-control" id="cardNumber" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputAddressLine1">NAME ON CARD </label>
                            <input type="address" className="form-control" id="inputAddressLine1" placeholder="Address" required />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="cardExpDate">Expiry Date</label>
                            <CardExpiryElement id="cardExpDate" className="form-control" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="cardCvc">CVC CODE </label>
                            <CardCvcElement id="cardCvc" className="form-control" />
                        </div>
                    </div>
                    {
                        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                    }
                    {
                        paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
                    }
                </div>


                <div className="credit-card-body">
                    <div className="d-flex d-flex flex-sm-column flex-md-row justify-content-between">
                        <div className="credit-card-text">
                            <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod" value="paypal" disabled/>
                            <h3>PayPal</h3>
                            <p>You will be redirected to PayPal website to complete your purchase securely</p>
                        </div>
                        <div className="paypal-img">
                            <img className="mr-2" src='https://i.imgur.com/tycFVQf.png' alt="" />
                        </div>
                    </div>

                </div>

                <div className="d-flex justify-content-end payment-custom-btn">
                    <button type="submit" className="main-btn mr-n4" disabled={!stripe}>NEXT</button>
                </div>
            </form>
        </div>
    );
};

export default BankDetails;