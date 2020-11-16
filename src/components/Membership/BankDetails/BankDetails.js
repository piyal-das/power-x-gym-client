import './BankDetails.scss';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import visa from '../../../Images/credit-cards_visa.png';
import master from '../../../Images/credit-cards_mastercard.png';
import amex from '../../../Images/credit-cards_amex.png';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const BankDetails = (props) => {
    const [error, setError] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const {err, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if(err){
        setError(true)
      }else{
        const paymentID = paymentMethod.id;
        props.stepHandler({paymentID})
        setError(false)
      }
    };

    return (
        <form className="col-12 border rounded p-5" onSubmit={handleSubmit}>
            {
                error &&
                <div className="alert alert-danger">
                    Something went wrong
          </div>
            }
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <input type="radio" name="type" id="card" />
                    <div className="ml-2">
                        <label htmlFor="card" className="h3">Credit Card</label>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio voluptatum reprehender.</p>
                    </div>

                </div>
                <div>
                    <img src={visa} alt="" />
                    <img className="px-2" src={master} alt="" />
                    <img src={amex} alt="" />
                </div>
            </div>

            <div className="my-5">
                <CardElement />
            </div>
            <div className="text-right">
                <button type="submit" className="btn btn-primary" disabled={!stripe}>
                    Next
          </button>
            </div>

        </form>
    );
};

export default BankDetails;