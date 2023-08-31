import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mb-10 pt-20 ">
      <Container>
      <Helmet>
          <title>Portfolio | Contact </title>
        </Helmet>
        <h5 className="text-4xl text-center font-bold pt-10 text-blue-500 ">
         CONTACT ME
          </h5>
        <h5 className=" uppercase  text-2xl text-center font-bold pt-2 pb-10 text-white ">
        Reach Out and Stay in Touch
          </h5>
        <div className="hero">
       
          <div className="hero-content w-full  flex-col md:flex-row">
        
        {/* left  div */}
            <div className="text-center  w-1/2 md:text-left items-center text-white">
              <h1 className="text-3xl font-bold text-blue-500 mb-3">GET IN TOUCH </h1>
              <h5 className="text-2xl font-bold">Name</h5>
              <p className="text-xl" >Me. Arif Ul Islam</p>
              
              <h5 className="text-2xl font-bold mt-3">Email</h5>
              <p className="text-xl">mdarifulislam6145@gmail.com</p>
           
              <h5 className="text-2xl font-bold mt-3">Address</h5>
              <p className="text-xl">Badda, Dhaka-1212 , Bangladesh</p>
            </div>

            {/* right div */}
            {/* form */}
            
            <div className="card w-1/2 shadow-2xl bg-base-100">
            
              <div className="card-body">
              <h1 className="text-2xl font-bold text-blue-500 mb-3"> MESSAGE ME </h1>

              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message Me</span>
                  </label>
                  <textarea className="textarea " placeholder="your message"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
            {/* form */}
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
