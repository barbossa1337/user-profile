import React from 'react';

const PP = ({image}) => {
    return (
        <div style={{width: "300px"}} className="mx-auto">
            <img
                src={image.url}
                className="rounded-5 d-block mx-auto mt-3"
                width="250"
                height="300"
            />
        </div>
    );
};

export default PP;