import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Service from '../../Home/Service/Service';
import Book from '../Book/Book';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [services, setServices] = useState([]);
    
    
    useEffect(() => {
        fetch('https://guarded-island-57940.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                <div className="row ms-5 ps-5 p-5 g-5 d-flex justify-content-center" style={{ width: "100%"}}>
                
                {
                    services.map(service => <Book key={service.name} service={service}></Book>)
                }
                </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;