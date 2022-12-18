import React from 'react';

const Info = ({user}) => {
    return (
        <div style={{width: "300px"}} className="mx-auto text-start">
            <h2 className="fs-3 text-center mt-3 mb-3 border-bottom border-3 border-dark pb-2">Contact</h2>
            <span className="fw-bold text-dark">Email : </span> <span>{user.email}</span>
            <br/>
            <span className="fw-bold text-dark">Username : </span><span>{user.username}</span>
            <br/>
            <span className="fw-bold text-dark">Phone : </span><span>{user.phone}</span>
            <br/>
            <span className="fw-bold text-dark">Website : </span><span>{user.website}</span>
            <br/>
        </div>
    );
};

export default Info;