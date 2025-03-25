import React from 'react'

<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" rel="stylesheet"/>
function login(){
         return(
            <div>
                
            <div className="page-wrapper  bg-opacity-75 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
            <div className="row">
            <h2 className="  text-center  mb-4">Join as a client or freelancer</h2>
  <div className="col">
    <div className="card ">
    <div >
      <div className="card-body">
      


        <h3 className="card-title">I'am a Client <span className="text-6xl ">💼</span></h3>
        
        
        <a href="/Register_client" className="btn btn-primary">Go</a>
      </div>
    </div>
  </div>
  </div> 
  <div className="col">
    <div className="card">
      <div className="card-body">

        <h3 className="card-title">I'am a Freelancer  <span className="text-6xl">🧑‍💻</span></h3>
        <a href="/Register_freelancer" className="btn btn-primary">Go</a>
      </div>
    </div>
  </div>
 
</div>
</div>
<p className="mt-4 text-center">
        Already have an account? <a href="/Login" className="text-blue-500">Log In</a>
      </p>
            </div>
            
            </div>
        
            
         )

}

export default login