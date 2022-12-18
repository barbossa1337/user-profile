import React from 'react';

const Comment = ({comment}) => {
    return (
        <div style={{width: "50%"}} className="mx-auto mt-5">
            <h2 className="text-center border-bottom border-3 border-dark pb-3">Comments</h2>
            <h5>{comment.name}:</h5>
            <a href="#" className="text-decoration-none mb-3">{comment.email}</a>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;