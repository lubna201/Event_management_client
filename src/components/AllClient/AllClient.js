import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllClient = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://localhost:4000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Clients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
        </div>
    );
};

export default AllClient;