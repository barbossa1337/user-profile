import React from 'react';

const Name = ({user}) => {
    return (
        <div style={{width: "300px"}}  className="text-center mx-auto mt-4 fs-2 fw-bold border-bottom border-3 border-dark">
            {user.name}
        </div>
    );
};

export default Name;