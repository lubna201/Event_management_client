import React from 'react';
import { useHistory } from 'react-router';
import './Comments.css';

const Comments = ({ comment }) => {
    console.log(comment);
    const history = useHistory();
    const handleTransport = (name) => {
        history.push(`/buy/${name}`);
    }
    return (
        <div className="card design d-flex justify-content-center" style={{ width: "20rem" }}>
            <div className="text-center wave">
                <img src={comment.imageURL} className="card-img-top img-fluid" style={{ width: "20rem", height: "20rem" }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <p className="card-text">{comment.comment}</p>
            </div>
        </div>
    );
};

export default Comments;