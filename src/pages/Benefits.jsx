import React from "react";

const Benefits = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">The Benefits of FreeHands</h1>
        <p className="lead text-muted">
          Discover why FreeHands is the ideal platform for freelancers and clients.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Flexibility */}
        <div className="col-md-4 text-center p-3">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-primary">🔹 Flexibility</h4>
            <p className="text-muted">
              Freelancers can work wherever and whenever they want, according to their own schedule.
            </p>
          </div>
        </div>

        {/* Financial Independence */}
        <div className="col-md-4 text-center p-3">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-primary">🔹 Financial Independence</h4>
            <p className="text-muted">
              The ability to set their own rates and manage their income freely.
            </p>
          </div>
        </div>

        {/* Access to the Global Market */}
        <div className="col-md-4 text-center p-3">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-primary">🔹 Access to the Global Market</h4>
            <p className="text-muted">
              Find projects all over the world, without any geographical limitations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
