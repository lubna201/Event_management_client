import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
// import Manage from '../Manage/Manage';
import './AddService.css'
import Manage from '../Manage/Manage';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://guarded-island-57940.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://guarded-island-57940.herokuapp.com/addServices`;
        console.log('service data', serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleImageUpload = service => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', service.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function myFunction() {
        console.log('Clicked search');
        if (document.getElementById("addService") && document.getElementById("table")) {
            document.getElementById("table").style.display = "block";
            document.getElementById("addService").style.display = "none";
        }
    }
    function myFunction1() {
        console.log('Clicked search');
        if (document.getElementById("addServices") && document.getElementById("table")) {
            document.getElementById("table").style.display = "none";
            document.getElementById("addService").style.display = "block";
        }
    }
    

    return (
        <div>
            <div className="sidenav">
                <a href="#addService" onClick={myFunction}>Manage service</a>
                <a href="#addService" onClick={myFunction1}>Add service</a>
                <a href="#edit">Edit service</a>
            </div>
            <div className="main" id="addServices">
                <div id="addService">
                    <h1>Add service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Service Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label >Description: </label>
                        <br />
                        <input name="description" placeholder="Enter description" ref={register} />
                        <br />
                        <label >Add Price :</label>
                        <br />
                        <input name="price" placeholder="Enter Price" ref={register} />
                        <br />
                        <label >Add Photo :</label>
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />


                        <input type="submit" name="Save" className="submitbtn" />
                    </form>
                </div>
                <table className="table" id="table">
                <thead>
                    <tr>
                        <th scope="col">service Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    {
                        services.map(service => <Manage key={service.name} service={service}></Manage>)
                    }
                </table>
            </div>

        </div>
    );
};

export default AddService;