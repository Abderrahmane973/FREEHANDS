import React from "react";

const Team = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Team</h1>
        <p className="lead text-muted">
          Meet the people who make FreeHands an exceptional platform.
        </p>
      </div>

      {/* A diverse team */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">👥 A diverse team</h2>
          <p className="text-muted">
            Our team is made up of experts in technology, management, and customer support, 
            working together to provide the best service.
          </p>
        </div>
        <div className="col-lg-6">
         
        </div>
      </div>

      {/* Commitment to freelancers */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">🤝 Commitment to freelancers</h2>
          <p className="text-muted">
            We do everything we can to provide freelancers with a seamless experience, 
            offering them the tools and support they need.
          </p>
        </div>
        <div className="col-lg-6">
          
        </div>
      </div>

      {/* Strong values */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">🏆 Strong values</h2>
          <p className="text-muted">
            At FreeHands, we believe in transparency, innovation, and trust. 
            These values guide us daily in building a reliable and high-performing platform.
          </p>
        </div>
        <div className="col-lg-6">
          
        </div>
      </div>
    </div>
  );
};

export default Team;
