import React from 'react'
import { useState } from "react";


function Register_client(){
 const [password, setPassword] = useState("");
         return(
            <div>
            <div className="page-wrapper p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
              <div className="card card-4">
                <div className="card-body">
                  <h2 className="title">Registre</h2>
                  <form method="POST">
                    <div className="row row-space">
                      <div className="col-5">
                        <div className="input-group">
                          <label className="label">first name</label>
                          <input
                            className="input--style-4"
                            type="text"
                            name="first_name"
                          />
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="input-group">
                          <label className="label">last name</label>
                          <input
                            className="input--style-4"
                            type="text"
                            name="last_name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row row-space">
                      <div className="col-5">
                        <div className="input-group">
                          <label className="label">Birthday</label>
                          <div >
                            <input
                              className="input--style-4 js-datepicker"
                              type="date"
                              name="birthday"
                            />
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="input-group">
                          <label className="label">Gender</label>
                          <div className="p-t-10">
                            <label className="radio-container m-r-45">
                              Male
                              <input
                                type="radio"
                                defaultChecked="checked"
                                name="gender"
                              />
                              <span className="checkmark" />
                            </label>
                            <label className="radio-container">
                              Female
                              <input type="radio" name="gender" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row-space">
                      <div className="col-5">
                        <div className="input-group">
                          <label className="label">Email</label>
                          <input className="input--style-4" type="email" name="email" />
                        </div>
                      </div>
                      <div className="row row-space">
                      <div className="col-5">
                      <div className="input-group">
                          <label className="label">Password</label>
                          <input
                            className="input--style-4"
                            type="Password"
                            placeholder="Password"
                            name="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          </div>
                          </div>
                        </div>




                      
                    </div>
                   


                    <div className="p-t-15">
                      <button className="btn btn--radius-5 btn--blue" type="submit">
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
          

         )

}

export default Register_client