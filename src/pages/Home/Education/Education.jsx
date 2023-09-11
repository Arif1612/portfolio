import Container from "../../Container";
import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <div className="mb-10 pt-20 flex justify-center items-center ">
      <Helmet>
        <title>Portfolio | Education </title>
      </Helmet>

      <Container className=" mt-10 mb-10">
        <h5 className="text-4xl text-center  font-bold py-10 text-blue-500">
          {" "}
          EDUCATION{" "}
        </h5>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-10 md:m-0">
          <div className="w-full  card full bg-neutral font-semibold hover:bg-base-100 hover:text-black text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Undergraduate School</h2>
              <p>
                United International University <br /> (BSC in CSE)
              </p>
              <div className="card-actions justify-end">
                <p>2016-2021 </p>
                <p>CGPA: 3.06 out of 4:00</p>
              </div>
            </div>
          </div>
          <div className="card w-full full bg-neutral font-semibold hover:bg-base-100  hover:text-black  text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Higher Secondary School</h2>
              <p>Birshreshtha Noor Mohammad Public College (Science Group)</p>
              <div className="card-actions justify-end">
                <p>2013-2015</p>
                <p>GPA: 5.00 out of 5.00</p>
              </div>
            </div>
          </div>
          <div className="card w-full full bg-neutral font-semibold hover:bg-base-100  hover:text-black  text-neutral-content">
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
