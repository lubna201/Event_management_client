import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Book.css';

const stripePromise = loadStripe('pk_test_51IeEEPC06cFLTUCDhCZP9ItOTiUOZupTZ31vqgXhtWfMpUj37s2AwKsYjqJushvdZPDkJ4Tlxfa6ssEO3Rkegvy200KosiAVE1');

const Book = ({ service }) => {
    const history = useHistory();
    const handleTransport = () => {
        if (document.getElementById("payment") && document.getElementById("service")) {
            document.getElementById("payment").style.display = 'block';
            document.getElementById("service").style.display = 'none';
        }
    }
    console.log(service);
    return (
        <div className="d-flex justify-content-center ms-5 ps-5 text-center">
            <div id="service">
            <div className="card design d-flex justify-content-center" style={{ width: "20rem" }}>
                <div className="text-center wave">
                    <img src={service.imageURL} className="card-img-top img-fluid" style={{ width: "20rem", height: "20rem" }} alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <h5 className="text-warning">${service.price}</h5>
                    <p className="card-text">{service.description}</p>
                    <button type="button" className="btn btn-warning" onClick={handleTransport}>Book Now</button>
                </div>
            </div>
            </div>
            <div className="mt-5" id="payment">
                <h1>Pay Now</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Book;