import React from "react";
import Container from "../../Container";
import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Education </title>
      </Helmet>

      <Container className=" mt-24 mb-10" >

      <h5 className="text-4xl text-center md:text-left font-bold py-10 text-blue-500">  EDUCATION </h5>
           <div className="flex flex-col md:flex-row  items-center  justify-center gap-4">
            
           <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Undergraduate School</h2>
            <p>United International University (BSC in CSE)</p>
            <div className="card-actions justify-end">
                <p>2016-2021 </p>
                <p>CGPA: 3.06 out of 4:00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
            Higher Secondary School</h2>
            <p>Birshreshtha Noor Mohammad Public College (Science Group)</p>
            <div className="card-actions justify-end">
             <p>2013-2015</p>
             <p>GPA: 5.00 out of 5.00</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Secondary School</h2>
            <p>Birshreshtha Noor Mohammad Public College (Science Group)</p>
            <div className="card-actions justify-end">
             <p>2008-2013</p>
             <p>GPA: 4.81 out of 5.00</p>
            </div>
          </div>
        </div>
           </div>
      </Container>
    </div>
  );
};

export default Education;
