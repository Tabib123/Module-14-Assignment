import React from 'react';

const WorkiList = () => {
  return (
    <div>
      <div className="worklist">
        <div className="container">
          <div className="worklist-whole-text">
            <h6 className="worklist-p">Work List</h6>
            <p className="worklist-text">
              We provide the Perfect Solution to your business growth
            </p>
            <div className="whole-cards">
              <div className="card card-1 border-0">
                <img
                  src="images/Activity.png"
                  className="card-img-top worklist-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title worklist-title">Grow Your Business</h5>
                  <p className="card-text worklist-text">
                    We help identify the best ways to improve your business
                  </p>
                  <a href="#" className="btn worklist-btn">
                    Learn More
                    <img src="images/arrow-right-solid.svg" className="card-img2" />
                  </a>
                </div>
              </div>

              <div className="worklist-whole-text">
                <div className="card border-0">
                  <img
                    src="images/Heart-1.png"
                    className="card-img-top worklist-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title worklist-title">Grow Your Business</h5>
                    <p className="card-text worklist-text">
                      We help identify the best ways to improve your business
                    </p>
                    <a href="#" className="btn worklist-btn">
                      Learn More
                      <img src="images/arrow-right-solid.svg" className="card-img2" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="worklist-whole-text">
                <div className="card border-0">
                  <img
                    src="images/Work.png"
                    className="card-img-top worklist-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title worklist-title">Grow Your Business</h5>
                    <p className="card-text worklist-text">
                      We help identify the best ways to improve your business
                    </p>
                    <a href="#" className="btn worklist-btn">
                      Learn More
                      <img src="images/arrow-right-solid.svg" className="card-img2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkiList;
