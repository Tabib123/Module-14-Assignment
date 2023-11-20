import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="subscription">
                <h6 className="s-text text-success">SUBSCRIBE</h6>
                <h1 className="s-h">Subscribe to get the latest news about us</h1>
                <p className="s-p">Please drop your email below to get daily update about what we do</p>
                <input className="form" type="search" placeholder="Search" aria-label="Search"></input>
                <button className='btn btn-warning s-b text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;