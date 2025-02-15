import React from "react";
import careerImage from "../careerPagePNG.webp";
import { FaUsers, FaChartLine, FaBuilding, FaHandshake } from "react-icons/fa";
import "../CSS/CareerPage.css";

const whyJoinData = [
  {
    title: "Work with Industry Experts",
    description:
      "Be part of a highly skilled team specializing in real estate compliance.",
    icon: <FaUsers size={40} color="#2F5FD0" />,
  },
  {
    title: "Career Growth & Learning",
    description:
      "Gain valuable experience in legal, technical, and financial aspects of real estate.",
    icon: <FaChartLine size={40} color="#2F5FD0" />,
  },
  {
    title: "Impactful Work",
    description:
      "Help property buyers and investors make safe and informed decisions.",
    icon: <FaBuilding size={40} color="#2F5FD0" />,
  },
  {
    title: "Collaborative Environment",
    description:
      "Work in a dynamic and supportive workspace with industry professionals.",
    icon: <FaHandshake size={40} color="#2F5FD0" />,
  },
];

const CareerPage = () => {
  return (
    <div
      className="pb-5"
      style={{
        backgroundColor: "#121212",
        color: "#EAEAEA",
      }}
    >
      <div className="mb-5">
        <div
          className="text-center p-5 rounded"
          style={{ backgroundColor: "#2F5FD0", color: "white" }}
        >
          <h1 className="mt-3 fw-bold">
            Exploring Exciting Career <br /> <i>Opportunities</i> with Us
          </h1>
          <p className="mt-3 fs-6">
            Discover the power of our feature spotlight and unleash <br /> the
            full potential of our offerings.
          </p>
        </div>
      </div>

      <div className="my-5 row justify-content-around align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={careerImage}
            className="img-fluid rounded"
            alt="Diversity Meeting"
            style={{ maxWidth: "70%", height: "auto", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6 px-md-5 px-5">
          <h1 className="py-3 fw-bold">Join Our Team at Secure Estate</h1>
          <p className="">
            At <b>Secure Estate,</b> we are dedicated to making real estate
            transactions <b>safer, more transparent, and legally secure</b>. Our
            team of professionals specializes in{" "}
            <b>
              legal due diligence, property inspections, valuation, and
              compliance
            </b>{" "}
            to protect property buyers and investors. <br />
            <br />
            We are expanding our team and looking for{" "}
            <b>skilled professionals</b>
            who are passionate about real estate compliance and risk assessment.
            If you have the expertise and experience, we invite you to be part
            of our mission.
          </p>
        </div>
      </div>

      <h2 className="text-center my-5">Current Openings</h2>
      {/* Job Openings Section */}
      <div className="row g-4 justify-content-center mx-4">
        {[
          {
            title: "Advocate (Real Estate Law Specialist)",
            experience:
              "Minimum 5 years in real estate law, property documentation, and legal due diligence.",
            responsibilities: [
              "Handling property-related legal matters, title verifications, and compliance.",
              "Assisting in drafting agreements, sale deeds, and contracts.",
              "Advising clients on legal risks and regulatory requirements.",
            ],
          },
          {
            title: "Civil Engineer (Property Inspection & Assessment)",
            experience:
              "Minimum 3 years in structural assessment, property inspections, and compliance verification.",
            responsibilities: [
              "Conducting property inspections to assess structural integrity.",
              "Ensuring compliance with local construction laws and safety regulations.",
              "Assisting in valuation and risk assessment reports for property buyers.",
            ],
          },
          {
            title: "Architect (Building Compliance & Design)",
            experience:
              "Minimum 3 years in architectural planning, building design, and compliance.",
            responsibilities: [
              "Reviewing and designing building layouts as per zoning and regulatory guidelines.",
              "Ensuring that property developments adhere to local building codes.",
              "Assisting in documentation and approvals related to construction projects.",
            ],
          },
          {
            title: "Accountant (Real Estate Financial Management)",
            experience:
              "Minimum 3 years in financial management, taxation, and compliance.",
            responsibilities: [
              "Managing financial records, taxation, and property transaction compliance.",
              "Assisting in cost analysis and financial planning for real estate investments.",
              "Ensuring accurate accounting and reporting for property buyers and developers.",
            ],
          },
        ].map((job, index) => (
          <div
            key={index}
            className="col-12 col-md-6 d-flex justify-content-center"
          >
            <div className="card" style={{ width: "600px", height: "auto" }}>
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{job.title}</h3>
                <p className="card-text">
                  <span className="fw-bold">Experience:</span> {job.experience}
                </p>
                <p className="card-text flex-grow-1">
                  <span className="fw-bold">Responsibilities:</span>
                  <ul>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </p>
                <div className="mt-auto text-end">
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* why join section */}
      <section>
        <div className="text-center my-5">
          <h2 className="fw-bold">Why Join Secure Estate?</h2>
        </div>
        <div className="row g-4 justify-content-center text-center mx-4">
          {whyJoinData.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-3 d-flex justify-content-center"
            >
              <div
                className="card p-3 d-flex align-items-center text-center"
                style={{ width: "250px", height: "200px" }}
              >
                <div className="mb-2">{item.icon}</div>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="fw-bold">📩 Apply Now!</p>
          <p>
            Send your resume and portfolio to{" "}
            <strong>talent@secureestate.in</strong> with the subject line{" "}
            <em>"Application for [Job Title] – Your Name"</em>.
          </p>
          <p>
            Join us in making real estate transactions secure, transparent, and
            hassle-free! 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
