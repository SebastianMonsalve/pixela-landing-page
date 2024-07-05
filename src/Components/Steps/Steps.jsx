import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps-bg">
      <div className="steps-title-container">
        <h2>Simple Steps To Success</h2>
      </div>
      <div className="steps-container">
        <div className="steps-content-1">
          <div className="steps-icon-container">
            <div className="circle-icon"></div>
            <i className="fa-regular fa-clipboard" />
          </div>
          <div className="steps-text-container">
            <h3>Post Your Project</h3>
            <p>
              Share Our Throught About Our Comapany And Every Team Member Also
              Our Vision And Mission.
            </p>
          </div>
        </div>
        <div className="steps-content-2">
          <div className="steps-icon-container">
            <div className="circle-icon"></div>

            <i className="fa-regular fa-flag" />
          </div>
          <div className="steps-text-container">
            <h3>Reviel Proposals</h3>
            <p>
              The Proposals And Freelancers´ Profiles. Check Their Portfolios,
              And Reviews To Make An Informed Decision
            </p>
          </div>
        </div>
        <div className="steps-content-3">
          <div className="steps-icon-container">
            <div className="circle-icon"></div>
            <i className="fa-regular fa-handshake" />
          </div>
          <div className="steps-text-container">
            <h3>Collaborate & Pay</h3>
            <p>
              Find The Perfect Match, Collaborating On Your Project. Track,
              Communicate, And Securely Pay Through Platform
            </p>
          </div>
        </div>
      </div>
      <div className="box1"></div>
      <div className="box2"></div>
    </div>
  );
};

export default Steps;
