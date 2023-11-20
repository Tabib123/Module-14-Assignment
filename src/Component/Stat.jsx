import React from 'react';

const Stat = () => {
  return (
    <div>
      <div className="stat">
        <div className="card border-0 stat-card">
          <img src="images/Activity.png" className="card-img-top stat-img" alt="..." />
          <div className="card-body">
            <div className="card-whole-text">
              <h5 className="card-title stat-title">240452</h5>
              <p className="card-text stat-text">Followers</p>
            </div>
          </div>
        </div>

        <div className="card border-0 stat-card">
          <img src="images/Activity.png" className="card-img-top stat-img" alt="..." />
          <div className="card-body">
            <div className="card-whole-text">
              <h5 className="card-title stat-title">6300</h5>
              <p className="card-text stat-text cwt">Solved Problems</p>
            </div>
          </div>
        </div>

        <div className="card border-0 stat-card">
          <img src="images/Activity.png" className="card-img-top stat-img" alt="..." />
          <div className="card-body">
            <div className="card-whole-text">
              <h5 className="card-title stat-title">25000</h5>
              <p className="card-text stat-text cwt">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="card border-0 stat-card">
          <img src="images/Activity.png" className="card-img-top stat-img" alt="..." />
          <div className="card-body">
            <div className="card-whole-text">
              <h5 className="card-title stat-title">360452</h5>
              <p className="card-text stat-text">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
