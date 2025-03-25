import React, { useState } from "react";

function RegisterFreelancer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "Male",
    email: "",
    skills: "",
    skillDescription: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="page-wrapper p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Register as Freelancer</h2>
            <form onSubmit={handleSubmit}>
              {/* Données personnelles */}
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">First Name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Last Name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Birthday</label>
                    <input
                      className="input--style-4"
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Gender</label>
                    <div className="p-t-10">
                      <label className="radio-container m-r-45">
                        Male
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="radio-container">
                        Female
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                      value={formData.email}
onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Password</label>
                    <input
                      className="input--style-4"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Skills</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="e.g. Web Development, Graphic Design"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-12">
                  <div className="input-group">
                    <label className="label">About you</label>
                    <p className="description-hint">
                      Provide a detailed description of your skills, experience, and any notable projects you've worked on.
                    </p>
                    <textarea
                      className="input--style-4"
                      name="skillDescription"
                      value={formData.skillDescription}
                      onChange={handleChange}
                      placeholder="Write a compelling overview of your expertise and accomplishments."
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button className="btn btn--radius-5 btn--blue" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterFreelancer;