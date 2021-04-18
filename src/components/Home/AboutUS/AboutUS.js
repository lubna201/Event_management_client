import React from 'react';
import about from '../../../images/about.jpg';

const AboutUS = () => {
    return (
        <section style={{height:'600px', width:'100%'}} className="row d-flex align-items-center bg-light">
            <div className="col-md-6 col-sm-6 col-12 p-5 d-flex justify-content-center">
                <img src={about} alt="" className="img-fluid rounded-3"/>
            </div>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 p-5">
                <h1>Let us handle<br/><span className="text-warning">your ceremony</span></h1>
                <p className="text-secondary">As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            </div>
        </section>
    );
};

export default AboutUS;