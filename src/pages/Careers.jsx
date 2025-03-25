import React from "react";

const Careers = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Career Opportunities</h1>
        <p className="lead text-muted">
          Join the FreeHands team and be part of the freelancing revolution.
        </p>
      </div>

      {/* Section: We're Hiring */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">💼 We're Hiring!</h2>
          <p className="text-muted">
            Looking for an exciting job? We're hiring talents in various fields: 
            development, marketing, customer service, and more!
          </p>
        </div>
        <div className="col-lg-6">
       
        </div>
      </div>

      {/* Section: Impact and Innovation */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">🚀 Impact and Innovation</h2>
          <p className="text-muted">
            At FreeHands, we are transforming the freelancing world by offering unique 
            opportunities to talents worldwide. Come innovate with us!
          </p>
        </div>
        <div className="col-lg-6 order-lg-1">
        
        </div>
      </div>

      {/* Section: Open Positions */}
      <div className="text-center">
        <h2 className="fw-bold text-dark">📢 Open Positions</h2>
        <p className="text-muted">
          Browse our job openings and apply today!
        </p>
        <a href="/careers/jobs" className="btn btn-primary mt-3">View Openings</a>
      </div>
    </div>
  );
};

export default Careers;
