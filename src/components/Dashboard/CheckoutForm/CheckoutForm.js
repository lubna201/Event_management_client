import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            //   console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <div className="mt-4">
                    <button type="submit" className="btn btn-warning" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {
                paymentError && <h3 style={{color:'red'}}>{paymentError}</h3>
            }
            {
                paymentSuccess && <h3 style={{color:'green'}}>Your payment is complete.</h3>
            }
        </div>
    );
};
export default CheckoutForm;