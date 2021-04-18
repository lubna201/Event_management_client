import Comments from '../../Comments/Comments';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';

const Testimonial = () => {
    const [comments, setComments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(() => {
        fetch('https://guarded-island-57940.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h1 className="text-center m-5">Our Client <span className="text-warning">Says About Us</span></h1>
            <div className="row p-5 g-5 d-flex justify-content-center" style={{ width: "100%"}}>
            {
                comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
            }
            </div>
        </div>
    );
};

export default Testimonial;