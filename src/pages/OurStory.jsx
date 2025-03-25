import React from "react";

const OurStory = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Story</h1>
        <p className="lead text-muted">
          Discover the evolution of FreeHands since its creation in 2025.
        </p>
      </div>

      {/* Founded in 2025 */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">📅 Founded in 2025</h2>
          <p className="text-muted">
            FreeHands was founded in 2025 with a clear mission: to create an intuitive 
            and efficient platform for freelancers and businesses worldwide.
          </p>
        </div>
        <div className="col-lg-6">
         
        </div>
      </div>

      {/* Connecting freelancers and businesses */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">🌎 Connecting freelancers and businesses</h2>
          <p className="text-muted">
            FreeHands enables freelancers to collaborate with businesses 
            without geographical constraints, facilitating remote work 
            and the growth of innovative projects.
          </p>
        </div>
        <div className="col-lg-6">
          
        </div>
      </div>

      {/* Growth and success */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold text-dark">🎯 Growth and success</h2>
          <p className="text-muted">
            Today, FreeHands has thousands of users and has enabled the successful 
            completion of numerous projects, thanks to a dynamic and engaged community.
          </p>
        </div>
        <div className="col-lg-6">
         
        </div>
      </div>
    </div>
  );
};

export default OurStory;
