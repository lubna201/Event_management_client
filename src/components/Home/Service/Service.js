import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const history = useHistory();
    const handleTransport = (name) => {
        history.push(`/buy/${name}`);
    }
    console.log(service);
    return (
        <div className="card design d-flex justify-content-center" style={{ width: "20rem" }}>
            <div className="text-center wave">
                <img src={service.imageURL} className="card-img-top img-fluid" style={{ width: "20rem", height: "20rem" }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <h5 className="text-warning">${service.price}</h5>
                <p className="card-text">{service.description}</p>
                {/* <button type="button" className="btn btn-warning" onClick={() => handleTransport(service.name)}>Book Now</button> */}
                <Link to="/dashboard" className="btn btn-brand btn-warning" onClick={() => handleTransport(service.name)}>Book Now</Link>
            </div>
        </div>
    );
};

export default Service;