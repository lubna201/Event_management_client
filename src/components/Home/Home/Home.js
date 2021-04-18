import React, { useEffect, useState } from 'react';
import Comments from '../../Comments/Comments';
import Footer from '../../Shared/Footer/Footer';
import AboutUS from '../AboutUS/AboutUS';
import Counter from '../Counter/Counter';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    
    
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div>
            <Header></Header>
            <h1 className="text-center m-5">Our <span className="text-warning">Services</span></h1>
            <div className="row p-5 g-5 d-flex justify-content-center" style={{ width: "100%"}}>
                
            {
                services.map(service => <Service key={service.name} service={service}></Service>)
            }
            </div>
            <AboutUS></AboutUS>
            <Counter></Counter>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;