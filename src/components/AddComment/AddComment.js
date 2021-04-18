import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Manage from '../Dashboard/Manage/Manage'
import { UserContext } from '../../App';

const AddComment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    const onSubmit =( data,loggedInUser) => {
        const CommentData = {
            name: loggedInUser.name,
            comment: data.comment,
            imageURL: loggedInUser.photo
        };
        const url = `http://localhost:4000/addComments`;
        console.log('Comment data', CommentData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CommentData)
        })
            .then(res => console.log('server side response', res))
    };
    
    
    

    return (
        <div>
            <div className="sidenav">
                <a href="#addComment">Add Comment</a>
            </div>
            <div className="main" id="addComments">
                <div id="addComment">
                    <h1>Add Comment</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Name:</label>
                        <br />
                        <input name="name" placeholder="Enter Name" value={loggedInUser.name} ref={register} />
                        <br />
                        <label >Comment: </label>
                        <br />
                        <input name="comment" placeholder="Enter comment" ref={register} />
                        
                        <input type="submit" name="Save" className="submitbtn" />
                    </form>
                </div>
                <table className="table" id="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>
                </table>
            </div>

        </div>
    );
};

export default AddComment;