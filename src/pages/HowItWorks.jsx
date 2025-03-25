import React from "react";

const HowItWorks = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold">How It Works</h1>

      <div className="row">
        {/* Section Clients */}
        <div className="col-lg-6">
          <div className="card shadow p-4 mb-4">
            <h2 className="text-success fw-bold"><i className="fas fa-user-tie"></i> For Clients</h2>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item"><strong>Sign Up:</strong> Create a free account and post your project.</li>
              <li className="list-group-item"><strong>Find a Freelancer:</strong> Browse profiles, check reviews, and hire the best match.</li>
              <li className="list-group-item"><strong>Work Together:</strong> Communicate with your freelancer and track project progress.</li>
              <li className="list-group-item"><strong>Secure Payment:</strong> Pay safely through our escrow system after project completion.</li>
            </ol>
          </div>
        </div>

        {/* Section Freelancers */}
        <div className="col-lg-6">
          <div className="card shadow p-4 mb-4">
            <h2 className="text-info fw-bold"><i className="fas fa-laptop-code"></i> For Freelancers</h2>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item"><strong>Register & Create Profile:</strong> Showcase your skills and experience.</li>
              <li className="list-group-item"><strong>Find Projects:</strong> Apply to jobs that match your expertise.</li>
              <li className="list-group-item"><strong>Deliver Work:</strong> Complete the project and submit for review.</li>
              <li className="list-group-item"><strong>Get Paid:</strong> Receive secure payments upon project approval.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;