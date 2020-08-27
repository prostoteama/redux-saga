import React from 'react';
 
export default ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{post}</h2>
            </div>
        </div>
    )
}