import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const Manage = ({ service }) => {
    const [state,setState]=useState();
    const deleteEvent = name => {
        console.log('remove clicked', name);
        const url = `https://guarded-island-57940.herokuapp.com/deleteService/${name}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                service.target.parentNode.style.display="none"
            }
        })
    }
    return (
        <tbody>
            <tr>
                <td>{service.name}</td>
                <td>{service.weight}</td>
                <td>${service.price}</td>
                <td><FontAwesomeIcon icon={faEdit}> </FontAwesomeIcon><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(service.name)}/></td>
            </tr>
        </tbody>
    );
};

export default Manage;